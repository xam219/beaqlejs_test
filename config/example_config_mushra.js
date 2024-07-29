// configure the test here
var TestConfig = {
  "TestName": "Mushra Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 1,
  "RateMaxValue": 5,
  "RateDefaultValue":0,
  "ShowFileIDs": true,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "https://docs.google.com/forms/d/13T55bvp_PRz6eCpS-wOYvdiMWMko4_eeJLJ9ew_C7t8/formResponse",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": -1,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Schubert 1",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/mos/NL01v3_001.wav",
            "1": "audio/mos/EL01v3_001.wav",
            "2": "audio/mos/NL01v3_001.wav",
        }
    },
    //    
    {
       "Name": "Schubert 1",
       "TestID": "id2_1",
       "Files": {
        "Reference": "audio/mos/NL01v3_002.wav",
        "1": "audio/mos/EL01v3_002.wav",
        "2": "audio/mos/NL01v3_002.wav",
        }
    },
  ]
}
