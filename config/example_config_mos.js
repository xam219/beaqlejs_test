// configure the test here
var TestConfig = {
  "TestName": "MOS Test: Naturalness and Intelligibility Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 1,
  "RateMaxValue": 5,
  "RateDefaultValue": 1,
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
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_241.wav",
            "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_241.wav",
            "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_241.wav",
            "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/241.wav",
            "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/241.wav",
            "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/241.wav",
            "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_241.wav",
            "anchor": "audio/mos/anchor.wav",
        }
    },
    //    
    {
       "Name": "Naturalness/Intelligibility",
       "TestID": "id1_2",
       "Files": {
        "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_242.wav",
        "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_242.wav",
        "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_242.wav",
        "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/242.wav",
        "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/242.wav",
        "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/242.wav",
        "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_242.wav",
        "anchor": "audio/mos/anchor.wav",
        }
    },
  ]
}
