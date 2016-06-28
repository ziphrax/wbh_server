var TechnologyTree = [
    {
        "name" : "Defence",
        "description" : "Required Branch for defensive technologies",
        "allows" : [
            {
                "name" : "Deflectors",
                "description" : "Guides incoming energy away from the ship. Basic, cheap but affords some protection.", 
                "allows" : [
                    [
                        {
                            "name" : "Improved Deflectors",
                            "description" : "Improvment on the basic deflectors",
                            "allows" : [
                                {
                                    "name" : "Shields",
                                    "description" : "Absorbs or nulifies incoming energy. Effective",
                                    "allows" : [
                                        {
                                            "name" : "Advanced Shields",
                                            "description" : "Improved shields, incredibly effective",
                                            "allows" : []
                                        },
                                        {
                                            "name" : "Frequency Fluctuation",
                                            "description" : "Improves the capability of shields vs modulated enegry weapons.",
                                            "allows" : []
                                        },
                                        {
                                            "name" : "Shield Capacitors",
                                            "description" : "Improved energy storage copacity, meaning faster shield regeneration times",
                                            "allows" : []
                                        }
                                    ]
                                },
                                {
                                    "name" : "Deflector Capacitors",
                                    "description" : "Improved energy storage copacity, meaning faster Deflector regeneration times",
                                    "allows" : []
                                }
                            ]
                        }
                    ]
                ]
            }
        ]
    },
    {
        "name" : "Attack",
        "description" : "Required Branch for attacking technologies",
        "allows" : [
            {
                "name" : "Short Range Lasers",
                "type" : "Energy",
                "description" : "Most basic and limited range laser weapons",
                "allows" : [
                    {
                        "name" : "Long Range Lasers",
                        "type" : "Energy",
                        "description" : "Improved laser weapons",
                        "allows" : []                
                    },
                    {
                        "name" : "Mining Lasers",
                        "type" : "Energy",
                        "description" : "Required to gather resources from asteroids",
                        "allows" : []                
                    }
                ]                
            },
            {
                "name" : "Mid Range Missles",
                "type" : "Kinetic",
                "description" : "Self propelled, chemical based explosive weapons.",
                "allows" : [
                    {
                        "name" : "Ultra Range Missles",
                        "type" : "Kinetic",
                        "description" : "Much longer ranged missles",
                        "allows" : []                
                    },
                    {
                        "name" : "Nuclear Missles",
                        "type" : "Nuclear",
                        "description" : "Most powerfull missles available",
                        "allows" : []                
                    }
                ]                
            }
        ]
    },{
        "name" : "Propulsion",
        "description" : "Allows for the creation of bigger or faster ships",
        "allows" : [
            {
                "name" : "Basic Engines",                
                "description" : "The most basic engines, only useful for smaller ships",
                "allows" : [
                     {
                        "name" : "Medium Engines",                
                        "description" : "Can make the most basic ships of the line",
                        "allows" : [
                             {
                                "name" : "Large Engines",                
                                "description" : "Used to move capital class ships",
                                "allows" : []                
                            }
                        ]                
                    }
                ]                
            }
        ]
    },
    {
        "name": "Political"
    },
    {
        "name": "Finance"
    },
    {
        "name": "Culture"
    },
    {
        "name": "Special"
    }

];

module.exports = TechnologyTree;
