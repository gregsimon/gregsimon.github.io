var group__media =
[
    [ "AudioPolicyService", "interface_audio_policy_service.html", [
      [ "GetStatus", "interface_audio_policy_service.html#a4374782f296495151ccc7d5b0ab6fab1", null ],
      [ "SetSystemAudioGain", "interface_audio_policy_service.html#a84ce3b762d7fd8f99a3d9a239fdf2fa6", null ],
      [ "SetSystemAudioMute", "interface_audio_policy_service.html#aa31849801740fcd4ba09084fe5d0fbd7", null ],
      [ "kInitialStatus", "interface_audio_policy_service.html#a1577f5e99922342af26f8e04690cc50d", null ]
    ] ],
    [ "AudioPolicyStatus", "struct_audio_policy_status.html", [
      [ "system_audio_gain_db", "struct_audio_policy_status.html#a659e768df6551dad2bef0479157e9722", null ],
      [ "system_audio_muted", "struct_audio_policy_status.html#a9360bf0ddcfc59ae58ae035dc018ea1f", null ]
    ] ],
    [ "AudioRenderer", "interface_audio_renderer.html", [
      [ "SetGain", "interface_audio_renderer.html#af11666727cb631aeddd29efa343ab649", null ],
      [ "kMaxGain", "interface_audio_renderer.html#ae52ae2d08f9baa4d7a0f967bf37995a1", null ],
      [ "kMutedGain", "interface_audio_renderer.html#a0674354c8384d4d6dfe27efc25f91387", null ]
    ] ],
    [ "AudioServer", "interface_audio_server.html", [
      [ "CreateRenderer", "interface_audio_server.html#a96166918fc5f770e802326651946356d", null ],
      [ "GetMasterGain", "interface_audio_server.html#a7394e8e2d4bd805cf8ab96ea365dd61d", null ],
      [ "SetMasterGain", "interface_audio_server.html#acaa55836afc2a958afce9a9b12522a8b", null ]
    ] ],
    [ "MediaCapturer", "interface_media_capturer.html", [
      [ "GetPacketProducer", "interface_media_capturer.html#ae3363a4a98e5715d97abebc0fea27df5", null ],
      [ "GetSupportedMediaTypes", "interface_media_capturer.html#aebcd05d25d7b003a50d5a3bab59f440f", null ],
      [ "SetMediaType", "interface_media_capturer.html#ac74b618bc6510f44bb0576affcc55841", null ],
      [ "Start", "interface_media_capturer.html#ae10a9b750780e78bef08ba6424947f1c", null ],
      [ "Stop", "interface_media_capturer.html#a33bfa553cc94c3d7af1ff677f5a173eb", null ]
    ] ],
    [ "MediaMetadata", "struct_media_metadata.html", [
      [ "album", "struct_media_metadata.html#a9cd90567263db1d4782537f3bc91760e", null ],
      [ "artist", "struct_media_metadata.html#aef00786251d09abe5e1a577520a2916e", null ],
      [ "composer", "struct_media_metadata.html#a4066f88313fcc39db938c217e5f36549", null ],
      [ "duration", "struct_media_metadata.html#a0b356c8779e41762198b95a02a73b910", null ],
      [ "genre", "struct_media_metadata.html#a62f0dd15041d8ee3464fb97ab042e89d", null ],
      [ "publisher", "struct_media_metadata.html#a3ec1ee7aa8217e5b157c010271f8c186", null ],
      [ "title", "struct_media_metadata.html#ad3c50170993cbb752ffa9ba674279f0d", null ]
    ] ],
    [ "MediaPlayer", "interface_media_player.html", [
      [ "GetStatus", "interface_media_player.html#a20a28780e363f3993aeceb9700dc9b75", null ],
      [ "Pause", "interface_media_player.html#ac09fb2c12a20c10260ee3e717f7b6052", null ],
      [ "Play", "interface_media_player.html#a8cd3e2cdc98eca5c25918eda3fc51cd5", null ],
      [ "Seek", "interface_media_player.html#a029de14834a7896fb377ef50018aab2e", null ],
      [ "SetReader", "interface_media_player.html#a6edb065074e7f6d6902e70bf805b2bd7", null ],
      [ "kInitialStatus", "interface_media_player.html#a1c712e6bc2c9a80e8a6aacdabf885256", null ]
    ] ],
    [ "MediaPlayerStatus", "struct_media_player_status.html", [
      [ "audio_connected", "struct_media_player_status.html#a3c3e41ece334e66a628703d45cd318b3", null ],
      [ "content_has_audio", "struct_media_player_status.html#a43b2ae56a6883509e7331266d7d14bbb", null ],
      [ "content_has_video", "struct_media_player_status.html#a43e51c360b7b9516540f7037aefa080b", null ],
      [ "end_of_stream", "struct_media_player_status.html#a1a9159201fa077547ca6a4c9f6c71568", null ],
      [ "metadata", "struct_media_player_status.html#a8854031a43f86e86ed84e4b77be250e9", null ],
      [ "problem", "struct_media_player_status.html#a8764be03d2fe93855df270ebfaeb7f75", null ],
      [ "timeline_transform", "struct_media_player_status.html#a12f0c400ac672c9e0858ab92466e2668", null ],
      [ "video_connected", "struct_media_player_status.html#aa62c19b398cdd7d62213b00701a60ed3", null ]
    ] ],
    [ "MediaRenderer", "interface_media_renderer.html", [
      [ "GetPacketConsumer", "interface_media_renderer.html#a1153dcf8713943291c095ff67001a993", null ],
      [ "GetSupportedMediaTypes", "interface_media_renderer.html#a59f22345011c00c8441b60988d3a6992", null ],
      [ "GetTimelineControlPoint", "interface_media_renderer.html#ab04ebca83d6064e43bfad41da535df3a", null ],
      [ "SetMediaType", "interface_media_renderer.html#aaecc902ffbd5f48800efab7391372615", null ]
    ] ],
    [ "MediaService", "interface_media_service.html", [
      [ "CreateAudioCapturer", "interface_media_service.html#a1e4c2ad81e2d5e51ac025af9bbf4d531", null ],
      [ "CreateAudioRenderer", "interface_media_service.html#a4f17832930ed62ced1631669b8f634cd", null ],
      [ "CreateDecoder", "interface_media_service.html#a2762f9fc6562fedb31ddaae4aacc1e17", null ],
      [ "CreateDemux", "interface_media_service.html#ae2614d2de88cb0586aa6d4e830a8f26d", null ],
      [ "CreateFileReader", "interface_media_service.html#a41c61d2241611e60ef5576f5f6f0ff72", null ],
      [ "CreateLpcmReformatter", "interface_media_service.html#a3b7ad6960ebce3b0b8acc887fee0ff14", null ],
      [ "CreateNetworkReader", "interface_media_service.html#ae337583e32744e87093936432c88df31", null ],
      [ "CreatePlayer", "interface_media_service.html#a1a309e61287d708b8f396dfb925b8c84", null ],
      [ "CreateSink", "interface_media_service.html#accdc906eba9067bc2f43569ce72acafc", null ],
      [ "CreateSource", "interface_media_service.html#a9ec84f5b9084deec9b73a1b7c4a48c1e", null ],
      [ "CreateTimelineController", "interface_media_service.html#aa3015586af02ff082dc56eb78a5a5235", null ],
      [ "CreateVideoRenderer", "interface_media_service.html#adec3af9b186d1108ac2eb6d7e329794f", null ]
    ] ],
    [ "MediaSink", "interface_media_sink.html", [
      [ "ConsumeMediaType", "interface_media_sink.html#adfe4629b13e4c5ea321007b0b4a5bc22", null ],
      [ "GetTimelineControlPoint", "interface_media_sink.html#a40983d32337b0f992337e38a237268d6", null ]
    ] ],
    [ "MediaSource", "interface_media_source.html", [
      [ "Describe", "interface_media_source.html#a2890527bd44bd566f58078686dae6db4", null ],
      [ "Flush", "interface_media_source.html#a0e8854b8cf164e39bf230e4051e869e5", null ],
      [ "GetPacketProducer", "interface_media_source.html#a5eedcfaa96fb262db5b38eb3474c8294", null ],
      [ "GetStatus", "interface_media_source.html#a86c954b5e10ca9ca773735c60ea278df", null ],
      [ "Seek", "interface_media_source.html#a11381535c0483e7ab6c5806ae3ef03c0", null ],
      [ "kInitialStatus", "interface_media_source.html#a66e617e4b5bcfc59c4a78dd251b9b050", null ]
    ] ],
    [ "MediaSourceStatus", "struct_media_source_status.html", [
      [ "audio_connected", "struct_media_source_status.html#a3c2f5bd18b87653b4350b5546a9df7f9", null ],
      [ "metadata", "struct_media_source_status.html#a06cc3dd9f5ac4f0058ddaefd1f688a19", null ],
      [ "problem", "struct_media_source_status.html#a6d749d0e6cc70c5b094162073a27d3a2", null ],
      [ "video_connected", "struct_media_source_status.html#a80b66eaf4e0252304790717e5fef980a", null ]
    ] ],
    [ "MediaPacket", "struct_media_packet.html", [
      [ "end_of_stream", "struct_media_packet.html#ae38277f019b4cf476b058ce74d9f7216", null ],
      [ "keyframe", "struct_media_packet.html#aa08fd1124e7023dca56dd31935543564", null ],
      [ "kNoTimestamp", "struct_media_packet.html#ae9639a9519cfbc6c41795a1f2138ca59", null ],
      [ "payload_buffer_id", "struct_media_packet.html#adb7a6495676bc0ce0df1ebd3a3b1a01a", null ],
      [ "payload_offset", "struct_media_packet.html#aa07f189596d8441ade32f53aac2b9858", null ],
      [ "payload_size", "struct_media_packet.html#af3d8bf7bd18d37887ced81d2d7c2a620", null ],
      [ "pts", "struct_media_packet.html#abdea810a3c959b237b712ebafe03118f", null ],
      [ "pts_rate_seconds", "struct_media_packet.html#a9aa1521097a018a854b77f30d3af6a85", null ],
      [ "pts_rate_ticks", "struct_media_packet.html#aaa46643e530632a265943b9d998ebd97", null ],
      [ "revised_media_type", "struct_media_packet.html#a277d8d2b2bb10d0f725be005687dacfb", null ]
    ] ],
    [ "MediaPacketDemand", "struct_media_packet_demand.html", [
      [ "min_packets_outstanding", "struct_media_packet_demand.html#a64ea5750ef29b37c0af0fab5c1d42657", null ],
      [ "min_pts", "struct_media_packet_demand.html#a5774b2f793de42abf843c71359c7f3b9", null ]
    ] ],
    [ "MediaPacketProducer", "interface_media_packet_producer.html", [
      [ "Connect", "interface_media_packet_producer.html#a1831a836b02fbb24ee89f31af111de20", null ],
      [ "Disconnect", "interface_media_packet_producer.html#a32cda98684160fae74022876c02a3228", null ]
    ] ],
    [ "MediaPacketConsumer", "interface_media_packet_consumer.html", [
      [ "AddPayloadBuffer", "interface_media_packet_consumer.html#a1e97df1da4d8a69fef33c449de68a19d", null ],
      [ "Flush", "interface_media_packet_consumer.html#afbaf8163cb5a3e2d69d32d7b97465ab1", null ],
      [ "PullDemandUpdate", "interface_media_packet_consumer.html#a9c58b685b3376987349f78a6cdd203cc", null ],
      [ "RemovePayloadBuffer", "interface_media_packet_consumer.html#a76c542974ef682d5666e63fd89fdfe30", null ],
      [ "SupplyPacket", "interface_media_packet_consumer.html#a86cdf72819bbeb78f988ea7e2be36351", null ],
      [ "kMaxBufferLen", "interface_media_packet_consumer.html#af58b08afecf7e0893a500b5e213ced22", null ]
    ] ],
    [ "MediaTypeConverter", "interface_media_type_converter.html", [
      [ "GetOutputType", "interface_media_type_converter.html#a67237ed66447fff5b043bdc878b0d8a4", null ],
      [ "GetPacketConsumer", "interface_media_type_converter.html#aaa7ecb142dc6c787232636d32f6dab04", null ],
      [ "GetPacketProducer", "interface_media_type_converter.html#ae26a5584ff792fc305dc3caa3c2ec8ff", null ]
    ] ],
    [ "MediaType", "struct_media_type.html", [
      [ "details", "struct_media_type.html#aabec9079d8f24e36112c63460192403d", null ],
      [ "encoding", "struct_media_type.html#a590c75111a5f8c68c541f46a96fc6c16", null ],
      [ "encoding_parameters", "struct_media_type.html#a2678427727bab759c040890a752e14ff", null ],
      [ "kAudioEncodingAac", "struct_media_type.html#a59ae80671feb1f79a1db05fb661c2cec", null ],
      [ "kAudioEncodingAmrNb", "struct_media_type.html#ad780c79b95c83207762ab14fb454d63b", null ],
      [ "kAudioEncodingAmrWb", "struct_media_type.html#a4e36ad2ec8d450fa25ea6d0a48b494ab", null ],
      [ "kAudioEncodingFlac", "struct_media_type.html#a7f213c571b8606968d7750cd9a56938d", null ],
      [ "kAudioEncodingGsmMs", "struct_media_type.html#a682a67a59993630c8902c93e3755f766", null ],
      [ "kAudioEncodingLpcm", "struct_media_type.html#a550823cc9353ac5df0454331cb11d324", null ],
      [ "kAudioEncodingMp3", "struct_media_type.html#a4a53b29eaab616407213ec8aa41e7b80", null ],
      [ "kAudioEncodingPcmALaw", "struct_media_type.html#a36c7d51ae524ccfe19db56318cd7171f", null ],
      [ "kAudioEncodingPcmMuLaw", "struct_media_type.html#aa0f811e04ac2b29bfe152edafbbbeee0", null ],
      [ "kAudioEncodingVorbis", "struct_media_type.html#a51caa3eab6bee991e55a2d45d7801213", null ],
      [ "kMediaEncodingUnsupported", "struct_media_type.html#a6780da2e1fdf7b5f0e3f334d1260bc94", null ],
      [ "kVideoEncodingH263", "struct_media_type.html#abadde822b7b995f8c86e0f83217b47e3", null ],
      [ "kVideoEncodingH264", "struct_media_type.html#aea06502c5cba803f277a107bfacfed8c", null ],
      [ "kVideoEncodingMpeg4", "struct_media_type.html#a972d6a3da2be3d7289f23bb013a94738", null ],
      [ "kVideoEncodingTheora", "struct_media_type.html#a7e3b90c90969e2b217d4d04655d73095", null ],
      [ "kVideoEncodingUncompressed", "struct_media_type.html#a9add900b4413ff45381fee015c78edda", null ],
      [ "kVideoEncodingVp3", "struct_media_type.html#a29cf3a1e0648a2717f122d91f7da71cf", null ],
      [ "kVideoEncodingVp8", "struct_media_type.html#a89bc6288ce7d6189dcfb45c3cc7abdbb", null ],
      [ "kVideoEncodingVp9", "struct_media_type.html#a37e1033a00f502a52a49d60ef077812a", null ],
      [ "medium", "struct_media_type.html#a678ee2ecd334b59b6c70d5f866e4fd5e", null ]
    ] ],
    [ "MediaTypeSet", "struct_media_type_set.html", [
      [ "details", "struct_media_type_set.html#ab077155a0eecc0f7bc45598184ede531", null ],
      [ "encodings", "struct_media_type_set.html#a62fa94350513528d4027801d4ee34207", null ],
      [ "medium", "struct_media_type_set.html#a0928301305027dcd493dca2731edf0a7", null ]
    ] ],
    [ "MediaTypeDetails", "union_media_type_details.html", [
      [ "audio", "union_media_type_details.html#a0ea13ca1a50ee30433bd3af9dbc71b7f", null ],
      [ "subpicture", "union_media_type_details.html#a70bfa22229d0af1dfef5118f08b5a95d", null ],
      [ "text", "union_media_type_details.html#a179f5f267838c61530e087222447a0a7", null ],
      [ "video", "union_media_type_details.html#aa0724c88eabc3294fb4ebdbc7d9d093d", null ]
    ] ],
    [ "MediaTypeSetDetails", "union_media_type_set_details.html", [
      [ "audio", "union_media_type_set_details.html#ad285a76ec913965bf80d9e17207f6bab", null ],
      [ "subpicture", "union_media_type_set_details.html#a12231aac64f0c007e3880cdeb1a2c57a", null ],
      [ "text", "union_media_type_set_details.html#a0996b034b3c075d73e9da7da47cd24b8", null ],
      [ "video", "union_media_type_set_details.html#a81a1bb7c0a9846823dd5599832897e7b", null ]
    ] ],
    [ "AudioMediaTypeDetails", "struct_audio_media_type_details.html", [
      [ "channels", "struct_audio_media_type_details.html#a3771598cd149d433032402904a614ccf", null ],
      [ "frames_per_second", "struct_audio_media_type_details.html#a26af12dd2b4667987a9d418eab493d6d", null ],
      [ "sample_format", "struct_audio_media_type_details.html#aa6af7c98727892095f75161869c7c597", null ]
    ] ],
    [ "AudioMediaTypeSetDetails", "struct_audio_media_type_set_details.html", [
      [ "max_channels", "struct_audio_media_type_set_details.html#ad6ffdd544d8fa4617eb5c1f336ddd0f8", null ],
      [ "max_frames_per_second", "struct_audio_media_type_set_details.html#a41b1d68b4b89da9b6e061f148ae12166", null ],
      [ "min_channels", "struct_audio_media_type_set_details.html#a7d2f915478f67685579a3084b7fd2d30", null ],
      [ "min_frames_per_second", "struct_audio_media_type_set_details.html#a6a4a7dcb1380e25b44e7054aafa389e6", null ],
      [ "sample_format", "struct_audio_media_type_set_details.html#abcbcbaf1fd386c196b465c26ea0a65e3", null ]
    ] ],
    [ "VideoMediaTypeDetails", "struct_video_media_type_details.html", [
      [ "coded_height", "struct_video_media_type_details.html#a20b7e4f9bb6bfc780cd6ff591db34f58", null ],
      [ "coded_width", "struct_video_media_type_details.html#a62b9c8e7f25a7cd19d47fe628edf154f", null ],
      [ "color_space", "struct_video_media_type_details.html#a4c7aff7ac42adc188b4e4e73754e5f71", null ],
      [ "height", "struct_video_media_type_details.html#a44aee3774612c0265fc40e36efc78602", null ],
      [ "line_stride", "struct_video_media_type_details.html#a15ef645de68f1ba21859ec178dd17fc2", null ],
      [ "pixel_aspect_ratio_height", "struct_video_media_type_details.html#a1a3e87298d073e4cf34b0c1c0e04fb5a", null ],
      [ "pixel_aspect_ratio_width", "struct_video_media_type_details.html#af42c89586de96d49abcb779291ec99fe", null ],
      [ "pixel_format", "struct_video_media_type_details.html#a3b39767b0a79297d7b7a8e57c3b01688", null ],
      [ "plane_offset", "struct_video_media_type_details.html#a3c8931308f500d03375c61bee62c9d03", null ],
      [ "profile", "struct_video_media_type_details.html#a0f23028dc892c267000c523cff983a73", null ],
      [ "width", "struct_video_media_type_details.html#a655440b2b63d4ffaf01e33b5569cab98", null ]
    ] ],
    [ "VideoMediaTypeSetDetails", "struct_video_media_type_set_details.html", [
      [ "max_height", "struct_video_media_type_set_details.html#a67315755f66ddd8e4139f20a9dd85629", null ],
      [ "max_width", "struct_video_media_type_set_details.html#a22073282ae48bbaed3d9e95a3db232c7", null ],
      [ "min_height", "struct_video_media_type_set_details.html#afd4b9fbe16c8f6c41629b9422ab11656", null ],
      [ "min_width", "struct_video_media_type_set_details.html#ae295e0a3daf4bffbd635f231885ce07c", null ]
    ] ],
    [ "TextMediaTypeDetails", "struct_text_media_type_details.html", null ],
    [ "TextMediaTypeSetDetails", "struct_text_media_type_set_details.html", null ],
    [ "SubpictureMediaTypeDetails", "struct_subpicture_media_type_details.html", null ],
    [ "SubpictureMediaTypeSetDetails", "struct_subpicture_media_type_set_details.html", null ],
    [ "NetMediaPlayer", "interface_net_media_player.html", [
      [ "GetStatus", "interface_net_media_player.html#a3e5534ea1ee0742b2db106c72378bc27", null ],
      [ "Pause", "interface_net_media_player.html#a48b1b911dcf5ec6ee0834081f6d386c5", null ],
      [ "Play", "interface_net_media_player.html#ab5d8b97a15d9e502f6d0f0a96bd02239", null ],
      [ "Seek", "interface_net_media_player.html#af8ea3464687c506043311261a7ef9630", null ],
      [ "SetUrl", "interface_net_media_player.html#a0dfabf16b48b99a5ab937ce9fb86084b", null ],
      [ "kInitialStatus", "interface_net_media_player.html#a7ab75f13d6c8e821162ae0986da4aaa3", null ]
    ] ],
    [ "NetMediaService", "interface_net_media_service.html", [
      [ "CreateNetMediaPlayer", "interface_net_media_service.html#af5eae226f69616a54fcb37d817f0bece", null ],
      [ "CreateNetMediaPlayerProxy", "interface_net_media_service.html#a5f0e90e1854f2d9e32eb3de3e000d658", null ]
    ] ],
    [ "Problem", "struct_problem.html", [
      [ "details", "struct_problem.html#abde925515ff28251ecac9ce57b93ac12", null ],
      [ "kProblemAssetNotFound", "struct_problem.html#abd7f35f4208f0f90960402b09298317e", null ],
      [ "kProblemConnectionFailed", "struct_problem.html#a6d6c97e45b3b990da7f2fbc62e57297e", null ],
      [ "kProblemContainerNotSupported", "struct_problem.html#a79a1b4a379a10668c483ee7e627a0cfc", null ],
      [ "kProblemInternal", "struct_problem.html#a9769db1a4d6425fcc030deda5718649a", null ],
      [ "kProblemMediaTypeNotSupported", "struct_problem.html#a27dc182579f30dc6a2a889e53ffaabb5", null ],
      [ "type", "struct_problem.html#a213f38eee29e0ed02d37b8a59da7ba5f", null ]
    ] ],
    [ "SeekingReader", "interface_seeking_reader.html", [
      [ "Describe", "interface_seeking_reader.html#a45d49d02b6ed24995a3d074e44007720", null ],
      [ "ReadAt", "interface_seeking_reader.html#a21de9635bd3da08cc1cdc7a4f3de251f", null ],
      [ "kUnknownSize", "interface_seeking_reader.html#ac2ceb8bf8aaf93f4acb04e377ace0bcd", null ]
    ] ],
    [ "MediaTimelineController", "interface_media_timeline_controller.html", [
      [ "AddControlPoint", "interface_media_timeline_controller.html#a24f7f69c7eebc79e56fbcb0c183ac0c2", null ],
      [ "GetControlPoint", "interface_media_timeline_controller.html#ab5b4ca299add8c8861e6cfee84227b43", null ]
    ] ],
    [ "MediaTimelineControlPoint", "interface_media_timeline_control_point.html", [
      [ "GetStatus", "interface_media_timeline_control_point.html#aabb9d52f30db1b19db5c886071b8ac93", null ],
      [ "GetTimelineConsumer", "interface_media_timeline_control_point.html#adc10179a8af2726a6cbcae9914c6bef0", null ],
      [ "Prime", "interface_media_timeline_control_point.html#ad16b8583a40541c4abbf77243b4f23e9", null ],
      [ "SetProgramRange", "interface_media_timeline_control_point.html#a3343d672a2946b690544890cba5357d8", null ],
      [ "kInitialStatus", "interface_media_timeline_control_point.html#a9ca91f7d8768df251963d24abd0677c2", null ]
    ] ],
    [ "MediaTimelineControlPointStatus", "struct_media_timeline_control_point_status.html", [
      [ "end_of_stream", "struct_media_timeline_control_point_status.html#aa9f6a57ac978f9cd2df6cf83180dd3ef", null ],
      [ "timeline_transform", "struct_media_timeline_control_point_status.html#afe9c7e57716c49e2cab54974d821d175", null ]
    ] ],
    [ "TimelineTransform", "struct_timeline_transform.html", [
      [ "reference_delta", "struct_timeline_transform.html#a9cd7bc7a1df03f6fb9aee470af0d0f0d", null ],
      [ "reference_time", "struct_timeline_transform.html#acbdc4b98e357e7d9d9cf3a341d12e9bf", null ],
      [ "subject_delta", "struct_timeline_transform.html#aa70f8277d46477a0e88eed85e50b0f1d", null ],
      [ "subject_time", "struct_timeline_transform.html#afef9dde44da8c353f86bb76def721685", null ]
    ] ],
    [ "TimelineConsumer", "interface_timeline_consumer.html", [
      [ "SetTimelineTransform", "interface_timeline_consumer.html#a53376b8e07df82536d1a0ec6784588a5", null ]
    ] ],
    [ "VideoRenderer", "interface_video_renderer.html", [
      [ "CreateView", "interface_video_renderer.html#a0f4d93748b7f7a9498754bd9675b182b", null ],
      [ "GetStatus", "interface_video_renderer.html#a77535fe80c91a34bcfd1c37336b7a6fa", null ],
      [ "kInitialStatus", "interface_video_renderer.html#a4833ed4e3ed0e0e27fced5ddf975004f", null ]
    ] ],
    [ "VideoRendererStatus", "struct_video_renderer_status.html", [
      [ "pixel_aspect_ratio", "struct_video_renderer_status.html#a9f28201791ae9c25a0c58968e2828f0a", null ],
      [ "video_size", "struct_video_renderer_status.html#af2d399249d8c25ae9e6dd9b272952085", null ]
    ] ],
    [ "AudioSampleFormat", "group__media.html#ga97cfd5633b2133e7ebe42dbb9b03e757", [
      [ "NONE", "group__media.html#gga97cfd5633b2133e7ebe42dbb9b03e757ac157bdf0b85a40d2619cbc8bc1ae5fe2", null ],
      [ "ANY", "group__media.html#gga97cfd5633b2133e7ebe42dbb9b03e757aa00374190265e7b6447db44977a7dff1", null ],
      [ "UNSIGNED_8", "group__media.html#gga97cfd5633b2133e7ebe42dbb9b03e757abd3e3009072581916b27048add96b543", null ],
      [ "SIGNED_16", "group__media.html#gga97cfd5633b2133e7ebe42dbb9b03e757aeca5176250a7237a0a3307f39341dade", null ],
      [ "SIGNED_24_IN_32", "group__media.html#gga97cfd5633b2133e7ebe42dbb9b03e757abfae2d974e299d1f14336d98c21d6ada", null ],
      [ "FLOAT", "group__media.html#gga97cfd5633b2133e7ebe42dbb9b03e757a9cf4a0866224b0bb4a7a895da27c9c4c", null ]
    ] ],
    [ "ColorSpace", "group__media.html#ga20f8d042a293f7b8c87f2992d183ceb9", null ],
    [ "MediaTypeMedium", "group__media.html#ga97fed2a57938246c8419570d54d4984d", null ],
    [ "PixelFormat", "group__media.html#ga60883d4958a60b91661e97027a85072a", [
      [ "MT21", "group__media.html#gga60883d4958a60b91661e97027a85072aa22f3e937416c7e3a56b13875614eccca", null ]
    ] ],
    [ "VideoProfile", "group__media.html#gaab3f548d5cdbba6b9fb8850e69af6639", null ],
    [ "kMaxTime", "group__media.html#gab314503f7437c5d106cb974bd133f181", null ],
    [ "kMinTime", "group__media.html#ga1345fb39f5a6757e60b8934c50b97283", null ],
    [ "kUnspecifiedTime", "group__media.html#ga006f24da171af762137cd6b388df4dfc", null ]
];