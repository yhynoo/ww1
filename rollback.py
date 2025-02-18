import os
import re

STATE_FILES_PATH = "history/states"  # Change this to your actual folder path

ALLOWED_COUNTRIES = {"AFG", "ARG", "AST", "AUS", "BRA", "COL", "DEN", "ENG", "FRA", "GER", "HOL", 
                     "ITA", "JAP", "MAN", "MEX", "PER", "PRU", "RAJ", "SOV", "SPR", "SWI", 
                     "TUR", "UBD", "USA"}

def process_file(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.readlines()

    updated_content = []
    for line in content:
        # Reduce infrastructure (minimum 1)
        #match = re.match(r"(\s*infrastructure\s*=\s*)(\d+)", line)
        #if match:
        #    value = int(match.group(2))
        #    if value > 1:
        #        line = f"{match.group(1)}{value - 1}\n"

        # Reduce industrial_complex, arms_factory, dockyard by 1 (remove if 0)
        match = re.match(r"(\s*(industrial_complex|arms_factory|dockyard)\s*=\s*)(\d+)", line)
        if match:
            value = int(match.group(3))
            reduction_value = max(1, round(value * 0.4))  # Reduce by 40%, but at least 1
            if (value - reduction_value) > 0:
                line = f"{match.group(1)}{value - reduction_value}\n"
            else:
                continue  # Remove the line if it would go to 0

        # Remove air bases, bunkers, and coastal bunkers
        if any(tag in line for tag in ["air_base", "bunker", "coastal_bunker", "anti_air_building"]):
            continue  # Skip these lines entirely

        # Reduce naval bases by 2 (remove if 0 or below)
        match = re.match(r"(\s*naval_base\s*=\s*)(\d+)", line)
        if match:
            value = int(match.group(2))
            if value > 2:
                line = f"{match.group(1)}{value - 2}\n"
            else:
                continue  # Remove the line if it would go to 0

        # Reduce manpower by 20%
        match = re.match(r"(\s*manpower\s*=\s*)(\d+)", line)
        if match:
            value = int(match.group(2))
            new_value = max(0, int(value * 0.7))  # Reduce by 30%
            line = f"{match.group(1)}{new_value}\n"

        # Remove cores/claims from non-allowed countries
        match = re.match(r"(\s*(add_core_of|add_claim_by)\s*=\s*)([A-Z]+)", line)
        if match and match.group(3) not in ALLOWED_COUNTRIES:
            continue  # Skip line if the country is not in the allowed list

        # Reducing supply hubs by 1 (but not below 0)
        match = re.match(r"(\s*supply_base\s*=\s*)(\d+)", line)
        if match:
            value = int(match.group(2))
            if value > 0:
                line = f"{match.group(1)}{value - 1}\n"
            else:
                continue  # Remove the line if it's already 0

        updated_content.append(line)

    # Write changes back to the file
    with open(file_path, "w", encoding="utf-8") as file:
        file.writelines(updated_content)

def process_all_files():
    for filename in os.listdir(STATE_FILES_PATH):
        if filename.endswith(".txt"):
            process_file(os.path.join(STATE_FILES_PATH, filename))

process_all_files()
print("State files updated successfully.")