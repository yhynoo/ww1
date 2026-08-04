# main theater
- 1912
    - Agadir Trials [idea]
        - "With You in Times of Danger"
        - The Fox Awakes in the Desert > Abbas Speaks in Oran > Uprising in Algeria
    - The Occupation of Wallonia
    - Duchy of Wallachia Offers a Defense Agreement, War in Southeastern Europe
        - *Unification with Greece?* > The Enosis of Crete, Samos Turns on the Turks, Uprising in Armenia
- 1913
    - *Another Young Turk Coup?* > End of War in Southeastern Europe
        - Armenia Seeks Guarantees > Tsar Lauds Armenian Efforts
        - Samos Unites with Greece (if still exists)
        - Serbia Eyes Albania
            - Ultimatum: Withdrawal from Albania or War > Ottomans Withdraw from Albania
            - the Fate of Thrace > Duchy of Thrace Established
    - Spain Asserts Claims to Morocco
- 1914
    - The Grain Deal [idea]
    - The Entente Established Again; Spain Joins the Entente
    - Atlas on Fire
        - Empower the Loyal Government > German Empire Aligns Morocco; France Encourages the Atlas Tribes
        - War Erupts in Europe!
    - [flavor:] Airships Over [country] (when a state is bombed for the first time), Knights of the Air (when first ace is promoted)
    - Memories of Semana Tragica [idea], Communists Demand an Armistice > Spanish Civil War
        - *Danger to the Mediterranean?* > The UK Joins the Entente
        - Portugal Joins the Entente
- 1915
    - [flavor] Gas! (when a warring side researches gas shells)
    - French Investments in Turkey [idea]
- 1916
    - Demonstrations in Constantinople, Turkey Joins the Entente
        - German Influence in the Middle East
            - *Use the Tsar's Leverage?* > Armenia and Afghanistan Join the German Alliance
            - Anti-Turkish Uprising in Arabia, Uprising in Syria
            - Clashes in Mesopotamia
        - (Romania) Thrace Asks for Guarantees
            - Thrace Asserts its Autonomy > Thrace Slips Away from the Turks
            - Ha'il Expels the Turkish Officials
    - *Serbia to Jump at the Opportunity?* > Serbia Joins the Entente
    - End of the Moroccan Campaign
- 1917
    - Wassmuss Disappears in Khuzestan
    - The Harvest of 1917 [idea]
- 1918
    - Wheat Shortages Throughout Europe [idea]; *Kadets Oppose Wheat Exports* > Milyukov Denounces the Tsarist Government!
        - Ukraine Independent!, *The OHL Debates an Intervention* > German Intervention in Ukraine (doesn't happen), Uprising in Warsaw!
    - Wilson Announces the Twelve Points, France Endorses Wilson's Idea, United States Join the Entente
- 1919
    - *Jännerstreik* > Austria-Hungary Disintegrates
    - Poland Joins the Entente, The Appointment of von Hertling
        - End of the Great War

# atmosphere
    news_event = {
        id = template.1
        title = ""

        is_triggered_only = yes
        major = yes

        option = {
            name = "Ok."
        }
    }

# report
    country_event = {
        id = template.1
        title = ""

        is_triggered_only = yes

        option = {
            name = "Ok."
        }
    }

# decision
    country_event = {
        id = template.1
        title = ""

        is_triggered_only = yes

        option = {
            name = "Yes."

            # event
            news_event = { id = template.2 hours = 6 }
        }
        option = {
            name = "No."

            # ai
            ai_chance = { modifier = { is_historical_focus = yes } factor = 0 }
        }
    }

    news_event = {
        id = template.2
        title = ""

        is_triggered_only = yes
        major = yes

        option = {
            name = "Ok."
        }
    }