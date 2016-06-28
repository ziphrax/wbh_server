module.exports = {
    generate: function(req,res){
        res.json({
            successful: true,
            message: "returning players.",
            docs: {
                "name" : "Example 1",
                "population": 1000000000,
                "type" : "M",
                "total_available_land" : 10000,
                "age" : 0 
            }
        });
    }
}