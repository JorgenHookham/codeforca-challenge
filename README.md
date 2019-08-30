# Code For Canada Challenge


## Build Directions

1. Clone this repository
2. Make sure you have `make` and `npm` installed locally
3. From the project directory, run `make`
4. You will see the output as json in your command line, and stored in the local file `./hashed-data.json`


## Output

The script outputs to [hashed-data.json](./hashed-data.json)

```
{
    "Garbage and Refuse": {
        "count": 126,
        "first_incident": "Tue Jan 03 2012 00:00:00 GMT-0800 (Pacific Standard Time)",
        "last_incident": "Fri Dec 21 2012 00:00:00 GMT-0800 (Pacific Standard Time)"
    },
    "Unsanitary Conditions": {
        "count": 83,
        "first_incident": "Tue Jan 03 2012 00:00:00 GMT-0800 (Pacific Standard Time)",
        "last_incident": "Wed Dec 19 2012 00:00:00 GMT-0800 (Pacific Standard Time)"
    },
    "Animals and Pests": {
        "count": 180,
        "first_incident": "Tue Jan 03 2012 00:00:00 GMT-0800 (Pacific Standard Time)",
        "last_incident": "Fri Dec 28 2012 00:00:00 GMT-0800 (Pacific Standard Time)"
    },
    "Building Conditions": {
        "count": 62,
        "first_incident": "Thu Jan 12 2012 00:00:00 GMT-0800 (Pacific Standard Time)",
        "last_incident": "Wed Dec 26 2012 00:00:00 GMT-0800 (Pacific Standard Time)"
    },
    "Vegetation": {
        "count": 67,
        "first_incident": "Wed Feb 01 2012 00:00:00 GMT-0800 (Pacific Standard Time)",
        "last_incident": "Wed Dec 05 2012 00:00:00 GMT-0800 (Pacific Standard Time)"
    },
    "Chemical Hazards": {
        "count": 17,
        "first_incident": "Wed Feb 08 2012 00:00:00 GMT-0800 (Pacific Standard Time)",
        "last_incident": "Thu Dec 06 2012 00:00:00 GMT-0800 (Pacific Standard Time)"
    },
    "Biohazards": {
        "count": 7,
        "first_incident": "Fri Apr 13 2012 00:00:00 GMT-0700 (Pacific Daylight Time)",
        "last_incident": "Tue Dec 18 2012 00:00:00 GMT-0800 (Pacific Standard Time)"
    },
    "Air Pollutants and Odors": {
        "count": 2,
        "first_incident": "Wed Dec 05 2012 00:00:00 GMT-0800 (Pacific Standard Time)",
        "last_incident": "Wed Dec 19 2012 00:00:00 GMT-0800 (Pacific Standard Time)"
    },
    "Retail Food": {
        "count": 1,
        "first_incident": "Thu Dec 20 2012 00:00:00 GMT-0800 (Pacific Standard Time)",
        "last_incident": "Thu Dec 20 2012 00:00:00 GMT-0800 (Pacific Standard Time)"
    }
}
```


## Notes

- Next step would have been to place this into an HTML document table for better access to non-technical individuals
- I opted for `JSON` as the primary outcome, as it's the most flexible data transfer format
