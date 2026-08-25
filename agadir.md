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
            - The Question of Neutrality > The Hague Announces Neutrality
    - [flavor:] Airships Over [country] (when a state is bombed for the first time), Knights of the Air (when first ace is promoted)
    - Memories of Semana Tragica [idea], Communists Demand an Armistice > Spanish Civil War
        - Italian Socialists Arrive in Spain
        - *Danger to the Mediterranean?* > The UK Joins the Entente
            - Maritz Uprising in South Africa
        - Portugal Joins the Entente
- 1915
    - [flavor] Gas! (when a warring side researches gas shells)
    - French Investments in Turkey [idea]
    - End of the Moroccan Campaign
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
    - Austrian Emperor Dies
- 1917
    - Wassmuss Disappears in Khuzestan
    - The Harvest of 1917 [idea]
- 1918
    - Wheat Shortages Throughout Europe [idea]; 
        - Grand Duchy of Finland Seeks Autonomy
    - *Kadets Oppose Wheat Exports* > Milyukov Denounces the Tsarist Government!
        - Ukraine Independent!, *The OHL Debates an Intervention* > German Intervention in Ukraine (doesn't happen)
        - Uprising in Warsaw!
            - Washington Embraces Warsaw
            - *Accept Warsaw's Defiance?*, Tsar's Government Accepts Warsaw's Independence
- 1919
    - *Jännerstreik* > Austria-Hungary Disintegrates
    - Poland Joins the Entente, The Appointment of von Hertling
        - End of the Great War

# america
- 1912
    - Agrarianist Uprising in Mexico; American Volunteers Arrive in Mexico
        - *Senate Debates Aid for Mexico* > American Aid for Mexican Democrats
            - Colombia Expels American Enterprise
            - *Ask for American Intervention?* > United States Intervene in Mexico
    - *Tensions on Cuba* > Uprising in Havana
        - United States Accept Cuban Independence
- 1913
    - Colombia Asks for an Armistice
- 1915
    - Controversial Movie Screens in the White House
        - Tensions in the South > *The Atlanta Convention* > Second Klan Established
        - The 'Land of Liberty' Address
- 1916
    - Escadrille Lafayette Arrives in France
- 1917
    - Halifax Explosion
- 1918
    - Wilson Announces the Twelve Points, France Endorses Wilson's Idea, United States Join the Entente
        - Espionage Act

# east asia
- 1912
    - *End of the Transition Government* > Yuan Shikai to Lead China
    - *Dalai Lama Announces Independence* > Tibet Independent
    - Emperor Mutsuhito Dies
- 1913
    - The Emperor's Address
        - *Democrats to Sideline the Sickly Emperor?* > Imperial Court to Withdraw? (unused)
    - The Assassination of Song Jiaoren > Sun in Exile
- 1914
    - *Japan Demands Our Asian Colonies* > German Empire Withdraws from Asia (unused)
- 1915
    - Twenty-One Demands
        - Opposition to Japanese Demands, *Textile Workers on Strike* > Linens Dyed Red
        - Yuan Shikai Declares the Empire of China
- 1916
    - Yuan Shikai Dies
    - Sun Yat-Sen Arrives in Shanghai

# 1919-1922
- 1919
    - Uprising in Crimea
    - Uprising in Moldova
        - *Guarantees to Moldova?* > [] Supports Moldova
        - *The Question of Kishinyev* > Ukraine Supports Independent Moldova

    - Helsinki Declaration
    
    - Alash Autonomy Independent!
        - The Turkestan Autonomy Established,
        - Liberal Government Established in Qarshi
            - A Turkic Union in Central Asia?, *Access to the Union?* > The Qarshi Government Joins the Turkic Union
            - Volgograd Accepts Central Asian Delegations

    - The Town on Volga
        - *Troubles with Supply* > The Hunger Committee Established, Trotsky Sighted in Volgograd
        - Arctic Garrisons Assaulted

        - Tula Armory in the Communists' Hands!
            - Communism in the Urals, Unrest in Western Governorates, Strikes in Siberian Coal Towns
                - The Eastern Volunteer Army Organizes, *Support for the Wild Ataman?* > Japanese Arms for the Eastern Army
                - Harbin Soviet Established!
                    - *Intervene in Manchuria?* > Japanese Army Enters Manchuria

            - White Ruthenian Workers Take Arms!
            - Ukrainian Soviet Established
                - *Army Coup?* > Ukrainian Supreme Council Dissolved
                - Tensions in Lviv, *Ukrainian Uprising in Eastern Galicia* > War in Eastern Galicia!
                    - *Endorse Western Ukraine?* > Hetmanate Endorses Western Ukraine
                    - Western Ukraine Aligns with Kyiv

        - *Tsar's Authority to Collapse?* > Admiral Kolchak Takes Lead
            - Tragedy in Omsk

- 1920
    - 'Why Saddle a Dead Horse?', *Wrangel's Trial* > 'The Atonement Debt'
    - *Anti-Tsarist Coalition?* > Anti-Tsarist Coalition Established
        - Kamenev to Lead the Anti-Tsarist Government
        - Ukrainian Soviet Aligns with Kamenev Government, The Union of Soviets Established

# atmosphere
    news_event = {
        id = placeholder.1
        title = ""

        is_triggered_only = yes
        major = yes

        option = {
            name = "Ok."
        }
    }

# report
    country_event = {
        id = placeholder.1
        title = ""

        is_triggered_only = yes

        option = {
            name = "Ok."
        }
    }

# decision
    country_event = {
        id = placeholder.1
        title = ""

        is_triggered_only = yes

        option = {
            name = "Yes."

            # event
            news_event = { id = placeholder.2 hours = 6 }
        }
        option = {
            name = "No."

            # ai
            ai_chance = { modifier = { is_historical_focus = yes } factor = 0 }
        }
    }

    news_event = {
        id = placeholder.2
        title = ""

        is_triggered_only = yes
        major = yes

        option = {
            name = "Ok."
        }
    }