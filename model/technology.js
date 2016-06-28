var TechnologyTree = [
    {
        "name" : "Defence",
        "description" : "Required Branch for defensive technologies",
        "allows" : [
            {
                "name" : "Deflectors",
                "description" : "Guides incoming energy away from the ship. Basic, cheap but affords some protection.",
                "research_cost" : 1000, 
                "allows" : [
                    [
                        {
                            "name" : "Improved Deflectors",
                            "description" : "Improvment on the basic deflectors",
                            "research_cost" : 2500,
                            "allows" : [
                                {
                                    "name" : "Shields",
                                    "description" : "Absorbs or nulifies incoming energy. Effective",
                                    "research_cost" : 7500,
                                    "allows" : [
                                        {
                                            "name" : "Advanced Shields",
                                            "research_cost" : 15000,
                                            "description" : "Improved shields, incredibly effective",
                                            "allows" : []
                                        },
                                        {
                                            "name" : "Frequency Fluctuation",
                                            "research_cost" : 11000,
                                            "description" : "Improves the capability of shields vs modulated enegry weapons.",
                                            "allows" : []
                                        },
                                        {
                                            "name" : "Shield Capacitors",
                                            "research_cost" : 11000,
                                            "description" : "Improved energy storage copacity, meaning faster shield regeneration times",
                                            "allows" : []
                                        }
                                    ]
                                },
                                {
                                    "name" : "Deflector Capacitors",
                                    "research_cost" : 7500,
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
                "research_cost" : 1000,
                "description" : "Most basic and limited range laser weapons",
                "range": 5,
                "purchase_cost": 50,                
                "damage" : {                    
                    "Energy" : 1
                },
                "allows" : [
                    {
                        "name" : "Long Range Lasers",
                        "type" : "Energy",
                        "research_cost" : 5000,
                        "description" : "Improved laser weapons",
                        "allows" : []                
                    },
                    {
                        "name" : "Mining Lasers",
                        "type" : "Energy",
                        "research_cost" : 2500,
                        "description" : "Required to gather resources from asteroids",
                        "allows" : []                
                    }
                ]                
            },
            {
                "name" : "Mid Range Missles",
                "type" : "Kinetic",
                "research_cost" : 1500,
                "description" : "Self propelled, chemical based explosive weapons.",
                "allows" : [
                    {
                        "name" : "Ultra Range Missles",
                        "type" : "Kinetic",
                        "research_cost" : 15000,
                        "description" : "Much longer ranged missles",
                        "allows" : []                
                    },
                    {
                        "name" : "Nuclear Missles",
                        "type" : "Nuclear",
                        "research_cost" : 25000,
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
                "research_cost" : 1000,           
                "description" : "The most basic engines, only useful for smaller ships",
                "allows" : [
                     {
                        "name" : "Medium Engines",     
                        "research_cost" : 10000,           
                        "description" : "Can make the most basic ships of the line",
                        "allows" : [
                             {
                                "name" : "Large Engines",        
                                "research_cost" : 1000000,        
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
        "research_cost" : 550000        
    },
    {
        "name": "Finance",        
        "research_cost" : 550000
    },
    {
        "name": "Culture",        
        "research_cost" : 550000
    },
    {
        "name": "Special",        
        "research_cost" : 999999
    }

];

module.exports = TechnologyTree;
