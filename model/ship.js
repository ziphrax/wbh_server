var Ships = [
    {
        "name" : "Scout",
        "description" : "Light recon ship, fast but fragile",
        "purchase_cost": 50,
        "sale_cost" : 30,
        "maintanence_cost": 1,
        "required_tech" : ['Basic Engines'],
        "speed" : 5,
        "hull" : 1,
        "shields" : 0,
        "weapons" : [] 
    },
    {
        "name" : "Planetary Fighter",
        "description" : "Your first fighters, fast but fragile but at least have guns",
        "required_tech" : ['Basic Engines','Short Range Lasers'],
        "purchase_cost": 100,
        "maintanence_cost": 2,
        "sale_cost" : 65,
        "speed" : 5,
        "hull" : 5,
        "shields" : 0,
        "weapons" : [ "Short Range Lasers"] 
    },
    {
        "name" : "Mining Ship",
        "description" : "Slow, but required to gather resources",
        "required_tech" : ['Basic Engines','Short Range Lasers'],
        "purchase_cost": 250,
        "maintanence_cost": 1,
        "sale_cost" : 125,
        "speed" : 1,
        "hull" : 15,
        "shields" : 0,
        "weapons" : [ "Mining Lasers"] 
    }
];

module.exports = Ships;
