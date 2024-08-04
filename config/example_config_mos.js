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
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_3",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_243.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_243.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_243.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/243.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/243.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/243.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_243.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_4",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_244.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_244.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_244.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/244.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/244.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/244.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_244.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_5",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_245.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_245.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_245.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/245.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/245.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/245.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_245.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },    
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_6",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_246.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_246.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_246.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/246.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/246.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/246.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_246.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_7",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_247.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_247.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_247.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/247.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/247.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/247.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_247.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_8",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_248.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_248.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_248.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/248.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/248.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/248.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_248.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_9",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_249.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_249.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_249.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/249.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/249.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/249.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_249.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_10",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_250.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_250.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_250.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/250.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/250.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/250.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_250.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    //    
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_11",
      "Files": {
            "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_251.wav",
            "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_251.wav",
            "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_251.wav",
            "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/251.wav",
            "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/251.wav",
            "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/251.wav",
            "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_251.wav",
            "anchor": "audio/mos/anchor.wav",
        }
    },
    //    
    {
       "Name": "Naturalness/Intelligibility",
       "TestID": "id1_12",
       "Files": {
        "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_252.wav",
        "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_252.wav",
        "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_252.wav",
        "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/252.wav",
        "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/252.wav",
        "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/252.wav",
        "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_252.wav",
        "anchor": "audio/mos/anchor.wav",
        }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_13",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_253.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_253.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_253.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/253.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/253.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/253.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_253.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_14",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_254.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_254.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_254.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/254.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/254.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/254.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_254.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_15",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_255.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_255.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_255.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/255.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/255.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/255.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_255.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },    
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_16",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_256.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_256.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_256.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/256.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/256.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/256.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_256.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_17",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_257.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_257.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_257.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/257.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/257.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/257.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_257.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_18",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_258.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_258.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_258.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/258.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/258.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/258.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_258.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_19",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_259.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_259.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_259.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/259.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/259.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/259.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_259.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_20",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_260.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_260.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_260.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/260.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/260.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/260.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_260.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
      //    
      {
        "Name": "Naturalness/Intelligibility",
        "TestID": "id1_21",
        "Files": {
              "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_301.wav",
              "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_301.wav",
              "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_301.wav",
              "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/301.wav",
              "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/301.wav",
              "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/301.wav",
              "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_301.wav",
              "anchor": "audio/mos/anchor.wav",
          }
      },
      //    
      {
         "Name": "Naturalness/Intelligibility",
         "TestID": "id1_22",
         "Files": {
          "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_302.wav",
          "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_302.wav",
          "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_302.wav",
          "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/302.wav",
          "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/302.wav",
          "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/302.wav",
          "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_302.wav",
          "anchor": "audio/mos/anchor.wav",
          }
      },
      {
        "Name": "Naturalness/Intelligibility",
        "TestID": "id1_23",
        "Files": {
         "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_303.wav",
         "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_303.wav",
         "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_303.wav",
         "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/303.wav",
         "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/303.wav",
         "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/303.wav",
         "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_303.wav",
         "anchor": "audio/mos/anchor.wav",
         }
      },
      {
        "Name": "Naturalness/Intelligibility",
        "TestID": "id1_24",
        "Files": {
         "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_304.wav",
         "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_304.wav",
         "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_304.wav",
         "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/304.wav",
         "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/304.wav",
         "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/304.wav",
         "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_304.wav",
         "anchor": "audio/mos/anchor.wav",
         }
      },
      {
        "Name": "Naturalness/Intelligibility",
        "TestID": "id1_25",
        "Files": {
         "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_305.wav",
         "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_305.wav",
         "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_305.wav",
         "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/305.wav",
         "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/305.wav",
         "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/305.wav",
         "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_305.wav",
         "anchor": "audio/mos/anchor.wav",
         }
      },    
      {
        "Name": "Naturalness/Intelligibility",
        "TestID": "id1_26",
        "Files": {
         "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_306.wav",
         "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_306.wav",
         "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_306.wav",
         "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/306.wav",
         "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/306.wav",
         "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/306.wav",
         "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_306.wav",
         "anchor": "audio/mos/anchor.wav",
         }
      },
      {
        "Name": "Naturalness/Intelligibility",
        "TestID": "id1_27",
        "Files": {
         "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_307.wav",
         "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_307.wav",
         "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_307.wav",
         "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/307.wav",
         "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/307.wav",
         "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/307.wav",
         "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_307.wav",
         "anchor": "audio/mos/anchor.wav",
         }
      },
      {
        "Name": "Naturalness/Intelligibility",
        "TestID": "id1_28",
        "Files": {
         "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_308.wav",
         "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_308.wav",
         "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_308.wav",
         "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/308.wav",
         "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/308.wav",
         "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/308.wav",
         "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_308.wav",
         "anchor": "audio/mos/anchor.wav",
         }
      },
      {
        "Name": "Naturalness/Intelligibility",
        "TestID": "id1_29",
        "Files": {
         "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_309.wav",
         "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_309.wav",
         "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_309.wav",
         "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/309.wav",
         "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/309.wav",
         "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/309.wav",
         "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_309.wav",
         "anchor": "audio/mos/anchor.wav",
         }
      },
      {
        "Name": "Naturalness/Intelligibility",
        "TestID": "id1_30",
        "Files": {
         "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_310.wav",
         "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_310.wav",
         "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_310.wav",
         "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/310.wav",
         "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/310.wav",
         "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/310.wav",
         "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_310.wav",
         "anchor": "audio/mos/anchor.wav",
         }
      },
    //    
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_31",
      "Files": {
            "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_311.wav",
            "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_311.wav",
            "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_311.wav",
            "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/311.wav",
            "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/311.wav",
            "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/311.wav",
            "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_311.wav",
            "anchor": "audio/mos/anchor.wav",
        }
    },
    //    
    {
       "Name": "Naturalness/Intelligibility",
       "TestID": "id1_32",
       "Files": {
        "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_312.wav",
        "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_312.wav",
        "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_312.wav",
        "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/312.wav",
        "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/312.wav",
        "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/312.wav",
        "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_312.wav",
        "anchor": "audio/mos/anchor.wav",
        }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_33",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_313.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_313.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_313.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/313.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/313.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/313.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_313.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_34",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_314.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_314.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_314.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/314.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/314.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/314.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_314.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_35",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_315.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_315.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_315.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/315.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/315.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/315.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_315.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },    
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_36",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_316.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_316.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_316.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/316.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/316.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/316.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_316.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_37",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_317.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_317.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_317.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/317.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/317.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/317.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_317.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_38",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_318.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_318.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_318.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/318.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/318.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/318.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_318.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_39",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_319.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_319.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_319.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/319.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/319.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/319.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_319.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },
    {
      "Name": "Naturalness/Intelligibility",
      "TestID": "id1_40",
      "Files": {
       "Reference": "audio/mos/NL01v3_audio_segment_16k/NL01v3_320.wav",
       "EL": "audio/mos/EL01v3_audio_segment_16k/EL01v3_320.wav",
       "NL": "audio/mos/NL01v3_audio_segment_16k/NL01v3_320.wav",
       "knnvc_a2a": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_dynamic_mlpg_k256/320.wav",
       "knnvc_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_knnvc_static_parallel_k8/320.wav",
       "lle_o2o": "audio/mos/EL01v3_audio_segment_16k_to_NL01v3_audio_segment_16k_llevc_dynamic_k256/320.wav",
       "cdvae": "audio/mos/EL01v3_NL01v3_stage2_wavlm_large_cdvqvae_vocoder_prematch/EL01v3_NL01v3_320.wav",
       "anchor": "audio/mos/anchor.wav",
       }
    },       
  ]
}
