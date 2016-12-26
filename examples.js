var examples = {
    "Koch's curve":
        {
            "angle": 60,
            "axiom": "F",
            "rules": 
                [
                    {
                        "pattern": "F",
                        "replace": "F-F++F-F"
                    },
                ]
        },
        
    "Koch's snowflake":
        {
            "angle": 60,
            "axiom": "F--F--F",
            "rules": 
                [
                    {
                        "pattern": "F",
                        "replace": "F+F--F+F"
                    },
                ]
        },
        
    "Vicsek fractal":
        {
            "angle": 90,
            "axiom": "F-F-F-F",
            "rules": 
                [
                    {
                        "pattern": "F",
                        "replace": "F-F+F+F-F"
                    },
                ]
        },

    "Tree":
        {
            "angle": 45,
            "axiom": "--M",
            "rules": 
                [
                    {
                        "pattern": "M",
                        "replace": "S[+M][-M]SM"
                    },
                    {
                        "pattern": "S",
                        "replace": "SS"
                    },
                ]
        },

    "Pythagoras tree":
        {
            "angle": 45,
            "axiom": "--M",
            "rules": 
                [
                    {
                        "pattern": "S",
                        "replace": "SS"
                    },
                    {
                        "pattern": "M",
                        "replace": "S[-M]+M"
                    },
                ]
        },
        
    "Fractal plant":
        {
            "angle": 25,
            "axiom": "---X",
            "rules": 
                [
                    {
                        "pattern": "X",
                        "replace": "M-[[X]+X]+M[+MX]-X"
                    },
                    {
                        "pattern": "M",
                        "replace": "MM"
                    },
                ]
        },    

    "Sierpinski triangle":
        {
            "angle": 120,
            "axiom": "M-S-S",
            "rules": 
                [
                    {
                        "pattern": "S",
                        "replace": "SS"
                    },
                    {
                        "pattern": "M",
                        "replace": "M-S+M+S-M"
                    },
                ]
        },
        
    "Lévy C curve":
        {
            "angle": 45,
            "axiom": "F",
            "rules": 
                [
                    {
                        "pattern": "F",
                        "replace": "+F--F+"
                    },
                ]
        },
};
