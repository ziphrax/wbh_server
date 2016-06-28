var TechnologyTree = [
    {
        "name" : "Defence",
        "description" : "Required Branch for defensive technologies",
        "allows" : [
            {
                "name" : "Deflectors",
                "description" : "Guides incoming energy away from the ship. Basic, cheap but affords some protection.",
                "cost" : 1000, 
                "allows" : [
                    [
                        {
                            "name" : "Improved Deflectors",
                            "description" : "Improvment on the basic deflectors",
                            "cost" : 2500,
                            "allows" : [
                                {
                                    "name" : "Shields",
                                    "description" : "Absorbs or nulifies incoming energy. Effective",
                                    "cost" : 7500,
                                    "allows" : [
                                        {
                                            "name" : "Advanced Shields",
                                            "cost" : 15000,
                                            "description" : "Improved shields, incredibly effective",
                                            "allows" : []
                                        },
                                        {
                                            "name" : "Frequency Fluctuation",
                                            "cost" : 11000,
                                            "description" : "Improves the capability of shields vs modulated enegry weapons.",
                                            "allows" : []
                                        },
                                        {
                                            "name" : "Shield Capacitors",
                                            "cost" : 11000,
                                            "description" : "Improved energy storage copacity, meaning faster shield regeneration times",
                                            "allows" : []
                                        }
                                    ]
                                },
                                {
                                    "name" : "Deflector Capacitors",
                                    "cost" : 7500,
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
                "cost" : 1000,
                "description" : "Most basic and limited range laser weapons",
                "allows" : [
                    {
                        "name" : "Long Range Lasers",
                        "type" : "Energy",
                        "cost" : 5000,
                        "description" : "Improved laser weapons",
                        "allows" : []                
                    },
                    {
                        "name" : "Mining Lasers",
                        "type" : "Energy",
                        "cost" : 2500,
                        "description" : "Required to gather resources from asteroids",
                        "allows" : []                
                    }
                ]                
            },
            {
                "name" : "Mid Range Missles",
                "type" : "Kinetic",
                "cost" : 1500,
                "description" : "Self propelled, chemical based explosive weapons.",
                "allows" : [
                    {
                        "name" : "Ultra Range Missles",
                        "type" : "Kinetic",
                        "cost" : 15000,
                        "description" : "Much longer ranged missles",
                        "allows" : []                
                    },
                    {
                        "name" : "Nuclear Missles",
                        "type" : "Nuclear",
                        "cost" : 25000,
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
                "cost" : 1000,           
                "description" : "The most basic engines, only useful for smaller ships",
                "allows" : [
                     {
                        "name" : "Medium Engines",     
                        "cost" : 10000,           
                        "description" : "Can make the most basic ships of the line",
                        "allows" : [
                             {
                                "name" : "Large Engines",        
                                "cost" : 1000000,        
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
        "name": "Political",        
        "cost" : 550000        
    },
    {
        "name": "Finance",        
        "cost" : 550000
    },
    {
        "name": "Culture",        
        "cost" : 550000
    },
    {
        "name": "Special",        
        "cost" : 999999
    }

];

module.exports = TechnologyTree;
