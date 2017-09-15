var group__scenic =
[
    [ "ImageInfo", "struct_image_info.html", [
      [ "AlphaFormat", "struct_image_info.html#ad9b427178bc5513af699e59d3f1837c4", [
        [ "OPAQUE", "struct_image_info.html#ad9b427178bc5513af699e59d3f1837c4a59d526e78eda61d3123df1fc2a349eb2", null ],
        [ "PREMULTIPLIED", "struct_image_info.html#ad9b427178bc5513af699e59d3f1837c4a5288dd1869f095c6f6005e26b42bea4d", null ],
        [ "NON_PREMULTIPLIED", "struct_image_info.html#ad9b427178bc5513af699e59d3f1837c4a7445a3a55efe67451454b64558ecfd62", null ]
      ] ],
      [ "ColorSpace", "struct_image_info.html#a86c72add039d8b58e836b60a034a30b8", [
        [ "SRGB", "struct_image_info.html#a86c72add039d8b58e836b60a034a30b8a29b90d267349e1d3e34415688f4abc9c", null ]
      ] ],
      [ "PixelFormat", "struct_image_info.html#ad6f5d323606d15ef0445c6fb3256b7cd", [
        [ "BGRA_8", "struct_image_info.html#ad6f5d323606d15ef0445c6fb3256b7cda327a0c7077e741cfd9b489bbe14b0464", null ]
      ] ],
      [ "Tiling", "struct_image_info.html#aff051ec9e21b36dcc8d752be7afad2fd", [
        [ "LINEAR", "struct_image_info.html#aff051ec9e21b36dcc8d752be7afad2fdaac47db15983a7d83b53a6f1b164e0160", null ],
        [ "GPU_OPTIMAL", "struct_image_info.html#aff051ec9e21b36dcc8d752be7afad2fda701a29eccf29705d0eeaf82e722908c5", null ]
      ] ],
      [ "alpha_format", "struct_image_info.html#ae56d0e68670685defd7f9ac9e6fe66da", null ],
      [ "color_space", "struct_image_info.html#a7ea8fb7c2718de570e109e725e481564", null ],
      [ "height", "struct_image_info.html#abf501006abb95de5006a7c1b1e57f0c5", null ],
      [ "pixel_format", "struct_image_info.html#ac39ddd91a2947416a42de1bb56f908a5", null ],
      [ "stride", "struct_image_info.html#a2bbfbcbdc8afbd92ab2b7828798eb055", null ],
      [ "tiling", "struct_image_info.html#af975d635747672fa333199edd8b870ef", null ],
      [ "width", "struct_image_info.html#a365458d85f0b5e523541bca8d75c09ec", null ]
    ] ],
    [ "ImagePipe", "interface_image_pipe.html", [
      [ "AddImage", "interface_image_pipe.html#a9f066dd10cd40a1ad52ca014d090c0a6", null ],
      [ "PresentImage", "interface_image_pipe.html#ae0f2d6a8a2174b2ddb86509041b5bc63", null ],
      [ "RemoveImage", "interface_image_pipe.html#a2e60e9db4cf3c8f8016082f46a697cba", null ]
    ] ],
    [ "DisplayInfo", "struct_display_info.html", [
      [ "device_pixel_ratio", "struct_display_info.html#abff0c772facbbcad8fd0b5db888d887b", null ],
      [ "physical_height", "struct_display_info.html#a2ca8d6ebd4352f36bc3a923082b1bb78", null ],
      [ "physical_width", "struct_display_info.html#a9b9202549c27784a05f87cb62c764275", null ]
    ] ],
    [ "Event", "union_event.html", [
      [ "import_unbound", "union_event.html#aa0bf9dfcdd8bc684b24104368a80a9c5", null ],
      [ "metrics", "union_event.html#a04c8cd94ead28527a7f1f7864166ee45", null ]
    ] ],
    [ "MetricsEvent", "struct_metrics_event.html", [
      [ "metrics", "struct_metrics_event.html#a263e750e766c447b8fa627b29162fc7b", null ],
      [ "node_id", "struct_metrics_event.html#a5e3377147c05dd18c7c2211fa1307712", null ]
    ] ],
    [ "ImportUnboundEvent", "struct_import_unbound_event.html", [
      [ "resource_id", "struct_import_unbound_event.html#a5724ca2018393d90f25f8837f815fe6a", null ]
    ] ],
    [ "ClipNode", "struct_clip_node.html", null ],
    [ "EntityNode", "struct_entity_node.html", null ],
    [ "ShapeNode", "struct_shape_node.html", null ],
    [ "Op", "union_op.html", [
      [ "add_layer", "union_op.html#ac6043ebd1778020dffd7ca0c14c98580", null ],
      [ "add_part", "union_op.html#a609bd4844df8d935bba9d4533547ba03", null ],
      [ "add_stroke", "union_op.html#a5abc876e2cd83210b3ba291da177a006", null ],
      [ "begin_stroke", "union_op.html#ab42dbb605878b211d5794b48623be6d4", null ],
      [ "bind_mesh_buffers", "union_op.html#a244627021089f97ae7b7b67af0e4e9aa", null ],
      [ "clear_group", "union_op.html#a03eea7ce84ff4fc39461673f0e35150a", null ],
      [ "clear_stroke", "union_op.html#aa89bde565c5ffffa5b2a223c4394fa8e", null ],
      [ "create_resource", "union_op.html#ae4e9267c09a7616d51c4b1bd999d13ee", null ],
      [ "detach", "union_op.html#a9bb60cdd3fa82f4a79e0944e923682d0", null ],
      [ "detach_children", "union_op.html#a0a894376c2de5655206dd6ca22d562cd", null ],
      [ "export_resource", "union_op.html#a4054e69e7f012d021045306387436bd9", null ],
      [ "extend_stroke", "union_op.html#af7a49dc8662ec2c0932a4df85164d018", null ],
      [ "finish_stroke", "union_op.html#ad27b3fe31e313d3a96a80942b53d5ec4", null ],
      [ "import_resource", "union_op.html#a7e1b488602faacbb3c319b333731caa6", null ],
      [ "release_resource", "union_op.html#a45ab02aecb4bb7ef4b776bac7672ec3c", null ],
      [ "remove_stroke", "union_op.html#af3ec92683feeb7d71aeecf27a0e033cb", null ],
      [ "scenic_add_child", "union_op.html#a2673a5c14a2d68304b05c1095e4b18d0", null ],
      [ "scenic_detach", "union_op.html#af5eef267bf8258ef605503e20575cc1e", null ],
      [ "scenic_import_resource", "union_op.html#a1bfd44483e78f2b14f57cd8702c70bb1", null ],
      [ "scenic_set_material", "union_op.html#aa0e3ae6001dbb2190c96c2ae231c9479", null ],
      [ "set_anchor", "union_op.html#a5ccb6ee77b6e60e3e0e819582533b1b4", null ],
      [ "set_camera", "union_op.html#a9a81797875a17e720a3540a5ec601031", null ],
      [ "set_camera_projection", "union_op.html#a269f4df2019511a0a41472de9ba70e49", null ],
      [ "set_clip", "union_op.html#a3c1b4bed61d0bfb93e1646354a08fe4d", null ],
      [ "set_color", "union_op.html#a2707b1c56e40abf30a9cdb5a3f798f3a", null ],
      [ "set_disable_clipping", "union_op.html#a366b8aaa9ec5ed4a9ff32e094be97240", null ],
      [ "set_event_mask", "union_op.html#adb508a955b3f1d22bfbeb3db40c0626f", null ],
      [ "set_hit_test_behavior", "union_op.html#a5081eeba27ade1fece5f2ae0ec5b1b1f", null ],
      [ "set_label", "union_op.html#ae61627b6edf13b5f149e80deeae0fb09", null ],
      [ "set_layer_stack", "union_op.html#af9320c4ab21192800fbe327bf42ebf5f", null ],
      [ "set_light_intensity", "union_op.html#ab7cc234ec3a1ca8ccca65a52ae40bbe2", null ],
      [ "set_material", "union_op.html#af222d002b668c08bb682d4fce8624955", null ],
      [ "set_path", "union_op.html#a284ed4d14510a7cc2c234c5afbd68307", null ],
      [ "set_pen_style", "union_op.html#a833e54ebe37dd6a7081372a30e8a47d8", null ],
      [ "set_renderer", "union_op.html#a698b8ed177ad24fb82b260a04736fd9a", null ],
      [ "set_rotation", "union_op.html#a2f3ba6692cff71e9036c3e410f065b5f", null ],
      [ "set_scale", "union_op.html#a004e5d197caaf0ece02fc29e51e80e63", null ],
      [ "set_shape", "union_op.html#a0853d5d0856bc2e6f066c619b069e5c4", null ],
      [ "set_size", "union_op.html#abb414694fbb35283d32f9c22574c9616", null ],
      [ "set_style", "union_op.html#a0f919bdd45531bf8a55c280cdb782290", null ],
      [ "set_tag", "union_op.html#a7dd51dd457be2ccf26894445c5ec3fc1", null ],
      [ "set_texture", "union_op.html#a9839048376369d6878d052f559fe677d", null ],
      [ "set_translation", "union_op.html#a573c6815131a71f945223207a6690148", null ]
    ] ],
    [ "CreateResourceOp", "struct_create_resource_op.html", [
      [ "args", "struct_create_resource_op.html#a9783881cdac93be3caa694562d062530", null ],
      [ "id", "struct_create_resource_op.html#a68647fddd95e528f7bb36d1582cc47fe", null ],
      [ "resource", "struct_create_resource_op.html#a3217325155caf4687d03b28fa81d44b4", null ]
    ] ],
    [ "ReleaseResourceOp", "struct_release_resource_op.html", [
      [ "id", "struct_release_resource_op.html#acbe02a8b37e4ac858a178df4c142913f", null ]
    ] ],
    [ "ExportResourceOp", "struct_export_resource_op.html", [
      [ "id", "struct_export_resource_op.html#aac44514e7d50c05543cfa891d62cb0e5", null ],
      [ "token", "struct_export_resource_op.html#aa6c9c5d8861c019d4309ac600dc88f2e", null ]
    ] ],
    [ "ImportResourceOp", "struct_import_resource_op.html", [
      [ "id", "struct_import_resource_op.html#a9ac7c98b956c7594c52e9c0d9cd0fb18", null ],
      [ "spec", "struct_import_resource_op.html#a6c12c5f5d70130cfae15b5ab3ffbe0e3", null ],
      [ "token", "struct_import_resource_op.html#a6023f68926a9a70179cdcc96d7bb6804", null ]
    ] ],
    [ "SetLabelOp", "struct_set_label_op.html", [
      [ "id", "struct_set_label_op.html#a12d9afe79e05c13e9d6ef416788df796", null ],
      [ "label", "struct_set_label_op.html#a86656cf5b0065bb5d973de654716e4ad", null ]
    ] ],
    [ "AddChildOp", "struct_add_child_op.html", [
      [ "child_id", "struct_add_child_op.html#a3ef20ad1ce95ad052e7c0df8aa6e9edd", null ],
      [ "node_id", "struct_add_child_op.html#a52cb51c4bd02fc0a25a61850278d9d2d", null ]
    ] ],
    [ "AddPartOp", "struct_add_part_op.html", [
      [ "node_id", "struct_add_part_op.html#a0c08df7dbd07f59500ce8b4c71a7c5f2", null ],
      [ "part_id", "struct_add_part_op.html#a3115b3946f779e4d27bb63ad33cb2df6", null ]
    ] ],
    [ "DetachOp", "struct_detach_op.html", [
      [ "id", "struct_detach_op.html#aabcbbfca87fbf59833a791f6fc03a455", null ]
    ] ],
    [ "DetachChildrenOp", "struct_detach_children_op.html", [
      [ "node_id", "struct_detach_children_op.html#a08a30d557c7ee55ca1c75aa9aa981011", null ]
    ] ],
    [ "SetTagOp", "struct_set_tag_op.html", [
      [ "node_id", "struct_set_tag_op.html#a9927c38bf3a502217679a6a34a8c3876", null ],
      [ "tag_value", "struct_set_tag_op.html#a3c905984b85495b0f09ef00e9f80dce5", null ]
    ] ],
    [ "SetTranslationOp", "struct_set_translation_op.html", [
      [ "id", "struct_set_translation_op.html#aa86da9c3b75716b4cbcd85999e294c96", null ],
      [ "value", "struct_set_translation_op.html#aec80c9f19ee3071ecb66bd59521464cf", null ]
    ] ],
    [ "SetScaleOp", "struct_set_scale_op.html", [
      [ "id", "struct_set_scale_op.html#ae16cf58edb475d6df891ab9efc9009d8", null ],
      [ "value", "struct_set_scale_op.html#a6d31202fef03aa0737adc8f12fcbd6e7", null ]
    ] ],
    [ "SetRotationOp", "struct_set_rotation_op.html", [
      [ "id", "struct_set_rotation_op.html#af9c56f6ffd30bf460e693b3068f69349", null ],
      [ "value", "struct_set_rotation_op.html#a4065cee873fe75e1acb1e2bc66964d51", null ]
    ] ],
    [ "SetAnchorOp", "struct_set_anchor_op.html", [
      [ "id", "struct_set_anchor_op.html#a13befd15da0c81e025c820950bb8249c", null ],
      [ "value", "struct_set_anchor_op.html#a096958fd044146f660a1d8de8e1fb7f1", null ]
    ] ],
    [ "SetSizeOp", "struct_set_size_op.html", [
      [ "id", "struct_set_size_op.html#a5a5a8f2594d62e0e401b08d435310452", null ],
      [ "value", "struct_set_size_op.html#a3c98e4b8c9e7c2632515bb39ac50d8a7", null ]
    ] ],
    [ "SetShapeOp", "struct_set_shape_op.html", [
      [ "node_id", "struct_set_shape_op.html#a520e67b160c20e4e9c69c85242445657", null ],
      [ "shape_id", "struct_set_shape_op.html#af2fd91626b59125e227320d615fa9769", null ]
    ] ],
    [ "SetMaterialOp", "struct_set_material_op.html", [
      [ "material_id", "struct_set_material_op.html#a5380b529f7455d5c8afb451fbda38607", null ],
      [ "node_id", "struct_set_material_op.html#a72a516a5ee943d559a30cc779de737a5", null ]
    ] ],
    [ "SetClipOp", "struct_set_clip_op.html", [
      [ "clip_id", "struct_set_clip_op.html#ab4bdf95eacb014442f0e4b65cc358471", null ],
      [ "clip_to_self", "struct_set_clip_op.html#afa9c180a26561c4f9c8ab3b86d59ae07", null ],
      [ "node_id", "struct_set_clip_op.html#abc105d0d169c2ab228fb50e66b571adc", null ]
    ] ],
    [ "SetHitTestBehaviorOp", "struct_set_hit_test_behavior_op.html", [
      [ "hit_test_behavior", "struct_set_hit_test_behavior_op.html#a142114da7547112be154048ffe9c5065", null ],
      [ "node_id", "struct_set_hit_test_behavior_op.html#a80278b2eb253a0e49fd975630b34fafa", null ]
    ] ],
    [ "SetCameraOp", "struct_set_camera_op.html", [
      [ "camera_id", "struct_set_camera_op.html#ae774decd31aa58524c079fc657743e7c", null ],
      [ "renderer_id", "struct_set_camera_op.html#a7521da145317d08a61ce2e7a9c4e572c", null ]
    ] ],
    [ "SetCameraProjectionOp", "struct_set_camera_projection_op.html", [
      [ "camera_id", "struct_set_camera_projection_op.html#a0296bf4c95712917d7359ed836b1878d", null ],
      [ "eye_look_at", "struct_set_camera_projection_op.html#a8976a279d6f0f713fd9c0d5f25942254", null ],
      [ "eye_position", "struct_set_camera_projection_op.html#a44549999a08a78ca7cf5b528c33a93d6", null ],
      [ "eye_up", "struct_set_camera_projection_op.html#a4c45b859227da1db49083f0cb0e86a48", null ]
    ] ],
    [ "SetLightIntensityOp", "struct_set_light_intensity_op.html", [
      [ "light_id", "struct_set_light_intensity_op.html#a20a1a27fc16431d79c5294ef6962cd8c", null ]
    ] ],
    [ "SetTextureOp", "struct_set_texture_op.html", [
      [ "material_id", "struct_set_texture_op.html#a042ae5762c4482ff2f50fd62980624d5", null ]
    ] ],
    [ "SetColorOp", "struct_set_color_op.html", [
      [ "color", "struct_set_color_op.html#a23086c459ba8cf1cef6767723ab9e6c7", null ],
      [ "material_id", "struct_set_color_op.html#ad38f55b2717389690c337e5232e5f013", null ]
    ] ],
    [ "MeshVertexFormat", "struct_mesh_vertex_format.html", [
      [ "normal_type", "struct_mesh_vertex_format.html#a10727b516ecd7c5535d88fae5b380699", null ],
      [ "position_type", "struct_mesh_vertex_format.html#ab524b9fe38aceeba29cbc258ccfff473", null ],
      [ "tex_coord_type", "struct_mesh_vertex_format.html#a67be6124817d40e064e9ce1e26c1eb99", null ]
    ] ],
    [ "BindMeshBuffersOp", "struct_bind_mesh_buffers_op.html", [
      [ "bounding_box", "struct_bind_mesh_buffers_op.html#ae2fbf8450b7feb0bedcfb1a58aa4d754", null ],
      [ "index_buffer_id", "struct_bind_mesh_buffers_op.html#a7685c33cdda9199761b43fc2c06072b2", null ],
      [ "index_count", "struct_bind_mesh_buffers_op.html#a218bc03dc2044717a2e72c7694deab7c", null ],
      [ "index_format", "struct_bind_mesh_buffers_op.html#a9ec76f91f9f111bb90b8a90406babada", null ],
      [ "index_offset", "struct_bind_mesh_buffers_op.html#a2f69e7b1331e68d3588b56ba586a65a8", null ],
      [ "mesh_id", "struct_bind_mesh_buffers_op.html#a991669c636c1a5ad011eaa047a1c7d55", null ],
      [ "vertex_buffer_id", "struct_bind_mesh_buffers_op.html#abea11b438d1b0eec753e54cb55a4b9bf", null ],
      [ "vertex_count", "struct_bind_mesh_buffers_op.html#a52d8e6d49e0f1d21fcdfea501484fa12", null ],
      [ "vertex_format", "struct_bind_mesh_buffers_op.html#ae74b1ee47a33797cc3ea8b21b7a4486d", null ],
      [ "vertex_offset", "struct_bind_mesh_buffers_op.html#a41d093438b83a65fd02859d3b4055e86", null ]
    ] ],
    [ "AddLayerOp", "struct_add_layer_op.html", [
      [ "layer_id", "struct_add_layer_op.html#a9e3af921cc35d80148be81d6282352df", null ],
      [ "layer_stack_id", "struct_add_layer_op.html#a23e2e4ffea3696420d605742dbbbba34", null ]
    ] ],
    [ "SetLayerStackOp", "struct_set_layer_stack_op.html", [
      [ "compositor_id", "struct_set_layer_stack_op.html#afa323d43b707ef7ae315f0bc5caf1283", null ],
      [ "layer_stack_id", "struct_set_layer_stack_op.html#a112fb73562ac5b159b2203731a1daabf", null ]
    ] ],
    [ "SetRendererOp", "struct_set_renderer_op.html", [
      [ "layer_id", "struct_set_renderer_op.html#a277aa3651c77966cdeb242fa5b4ce643", null ],
      [ "renderer_id", "struct_set_renderer_op.html#a035c9913e0b2663322fd1f2de7133af9", null ]
    ] ],
    [ "SetEventMaskOp", "struct_set_event_mask_op.html", [
      [ "event_mask", "struct_set_event_mask_op.html#a3117d54b178fb0c45be421abd3350798", null ],
      [ "id", "struct_set_event_mask_op.html#a903ffe568adb07f87adf42595a48deb6", null ]
    ] ],
    [ "SetDisableClippingOp", "struct_set_disable_clipping_op.html", [
      [ "disable_clipping", "struct_set_disable_clipping_op.html#a7b2d196a858872d00dd7b23d897868fd", null ],
      [ "renderer_id", "struct_set_disable_clipping_op.html#a0741e8d688f9db7f46bba5add9f7094f", null ]
    ] ],
    [ "PresentationInfo", "struct_presentation_info.html", [
      [ "presentation_interval", "struct_presentation_info.html#a9c65ed1c9b5dccd7562dc6fc1675fe29", null ],
      [ "presentation_time", "struct_presentation_info.html#ad472f4c3676e6729297ae64faee0c859", null ]
    ] ],
    [ "Resource", "union_resource.html", [
      [ "buffer", "union_resource.html#ab87c8a2b5b0a4206ce4855a3a4f10303", null ],
      [ "camera", "union_resource.html#a7249d2e2a2c98fa75a5a9483a36991e9", null ],
      [ "circle", "union_resource.html#a7e8f8bbd9283ef283fdfc98ec34579fc", null ],
      [ "clip_node", "union_resource.html#a90a20b99837de4c369b6425041941449", null ],
      [ "directional_light", "union_resource.html#a2719148fb1c5e0b3debaa2faabb12511", null ],
      [ "display_compositor", "union_resource.html#a87f604c079130aecd972e4792f6d90e2", null ],
      [ "entity_node", "union_resource.html#ab639345ac705259521c22b0412f8538b", null ],
      [ "image", "union_resource.html#a0b33d7419131ed7fde9a1e3dcd708a10", null ],
      [ "image_pipe", "union_resource.html#af8b3974bc565df72a6ffd93647a4aa91", null ],
      [ "image_pipe_compositor", "union_resource.html#a8cb2601d8c093a0588863efab5dd654e", null ],
      [ "layer", "union_resource.html#aa6ae60bd7c19fed5d5b7973a16f1e65e", null ],
      [ "layer_stack", "union_resource.html#a125efa11682dc9ef2153581544e8175e", null ],
      [ "material", "union_resource.html#a303fe9dde652299164dfe1dec5f10670", null ],
      [ "memory", "union_resource.html#a50cac9b850ec37f1156cd801fea5f86a", null ],
      [ "mesh", "union_resource.html#a42b3fa2bf4170fd3fbc08d4008ad45f4", null ],
      [ "rectangle", "union_resource.html#a31fc25af908be725366bbe9d58402db8", null ],
      [ "renderer", "union_resource.html#ad05f67933ed490e294588cb7f6142de7", null ],
      [ "rounded_rectangle", "union_resource.html#a9c61a973741f39281723478e57ec29af", null ],
      [ "scene", "union_resource.html#a8f28ba3fdc994d0e7cabc4e6420bea9f", null ],
      [ "shape_node", "union_resource.html#a7714815aab94f6846f0460c5b5689320", null ],
      [ "variable", "union_resource.html#a3d739f9bc1a68edd3d63cf39ea13dab8", null ]
    ] ],
    [ "ImagePipeArgs", "struct_image_pipe_args.html", [
      [ "image_pipe_request", "struct_image_pipe_args.html#a176c8dd30fc6e34546800ee69c94b02e", null ]
    ] ],
    [ "Memory", "struct_memory.html", [
      [ "memory_type", "struct_memory.html#adfe5d0e66165f6ec0e297734c7c1c4cf", null ],
      [ "vmo", "struct_memory.html#a1362fffba20857ff681c97a0756809b1", null ]
    ] ],
    [ "Image", "struct_image.html", [
      [ "info", "struct_image.html#a613143f61fa565fb838747cbd43ef22f", null ]
    ] ],
    [ "Buffer", "struct_buffer.html", [
      [ "num_bytes", "struct_buffer.html#a58f240a331eeb71615e3f14db9cf2ba5", null ]
    ] ],
    [ "DisplayCompositor", "struct_display_compositor.html", null ],
    [ "ImagePipeCompositor", "struct_image_pipe_compositor.html", [
      [ "target", "struct_image_pipe_compositor.html#a026be0f1935b71d6c74e7cef5d9bb2b1", null ]
    ] ],
    [ "LayerStack", "struct_layer_stack.html", null ],
    [ "Layer", "struct_layer.html", null ],
    [ "Scene", "struct_scene.html", null ],
    [ "Camera", "struct_camera.html", [
      [ "scene_id", "struct_camera.html#aab0a5300e7851097455ec60f2a9e07bb", null ]
    ] ],
    [ "Renderer", "struct_renderer.html", null ],
    [ "DirectionalLight", "struct_directional_light.html", null ],
    [ "Material", "struct_material.html", null ],
    [ "Variable", "struct_variable.html", [
      [ "type", "struct_variable.html#a1cc0844a14d642f1dee066535e01377e", null ]
    ] ],
    [ "SceneManager", "interface_scene_manager.html", [
      [ "CreateSession", "interface_scene_manager.html#a11fc4102b5425739cbca1871150b3551", null ],
      [ "GetDisplayInfo", "interface_scene_manager.html#a1ac39ce8d1366a4be8d3cb63e761ff86", null ]
    ] ],
    [ "Session", "interface_session.html", [
      [ "Enqueue", "interface_session.html#a0d4b5c8ce83307474cac161a577df2ae", null ],
      [ "HitTest", "interface_session.html#ae0bf458bd5ecf9658503df1f06e9c240", null ],
      [ "Present", "interface_session.html#a03362ea291f6aef33068b8371d571a2f", null ]
    ] ],
    [ "Hit", "struct_hit.html", [
      [ "distance", "struct_hit.html#a03014a7ab120732e5bdc8bcc916453a8", null ],
      [ "inverse_transform", "struct_hit.html#a3f418a3bd7934497d1444bee9bd43fb7", null ],
      [ "tag_value", "struct_hit.html#ac672b88f36cde2c4d968b5e1209dba43", null ]
    ] ],
    [ "SessionListener", "interface_session_listener.html", [
      [ "OnError", "interface_session_listener.html#a33f34dacd079a26fb50f1c601abf93ef", null ],
      [ "OnEvent", "interface_session_listener.html#a6b6b907729ad9dbf9ad974c4eb46e3c8", null ]
    ] ],
    [ "Rectangle", "struct_rectangle.html", null ],
    [ "RoundedRectangle", "struct_rounded_rectangle.html", null ],
    [ "Circle", "struct_circle.html", null ],
    [ "Mesh", "struct_mesh.html", null ],
    [ "vec2", "structvec2.html", [
      [ "x", "structvec2.html#a002d3519d48fe3cd79729b5b0ded74bf", null ],
      [ "y", "structvec2.html#a6d28b12b511da692550fc9d37b4e9b1d", null ]
    ] ],
    [ "vec3", "structvec3.html", [
      [ "x", "structvec3.html#a4ee2cfd5c2698031a47ab7f898d8d47b", null ],
      [ "y", "structvec3.html#a891379795a14c80936cde4170239a138", null ],
      [ "z", "structvec3.html#aa76213efcc5d656cc14b71db80a92162", null ]
    ] ],
    [ "vec4", "structvec4.html", [
      [ "w", "structvec4.html#a0c92fe67e490d9768217a00c2e8abd49", null ],
      [ "x", "structvec4.html#a36c650782a67137380c83b01545c94d6", null ],
      [ "y", "structvec4.html#a7328fe0e502fce92fa32016193052e92", null ],
      [ "z", "structvec4.html#a12b318751110db034dddc450cdec455d", null ]
    ] ],
    [ "mat4", "structmat4.html", [
      [ "matrix", "structmat4.html#a24d7083a1731c68fb450b46bf1e04d48", null ]
    ] ],
    [ "ColorRgba", "struct_color_rgba.html", [
      [ "alpha", "struct_color_rgba.html#a21c8859ae00f263a6c4d79ae412c3b4e", null ],
      [ "blue", "struct_color_rgba.html#a4cb716ce24ad506b887f4b048e0258bf", null ],
      [ "green", "struct_color_rgba.html#a4cf82d16b6983744cf3a9d43e8b436b1", null ],
      [ "red", "struct_color_rgba.html#a2d9e44c0bfbcd1abbea2433446b56bb3", null ]
    ] ],
    [ "Quaternion", "struct_quaternion.html", [
      [ "w", "struct_quaternion.html#aa44a65ab99e36f6ab8771030eed8a7ad", null ],
      [ "x", "struct_quaternion.html#a8b80f191a3155cc0158d2b4f4d50b2cb", null ],
      [ "y", "struct_quaternion.html#a3bd3f270462944423611f44e19d2511b", null ],
      [ "z", "struct_quaternion.html#a625cb732d8ff3083e7852b86b736ab29", null ]
    ] ],
    [ "Transform", "struct_transform.html", [
      [ "anchor", "struct_transform.html#a2d500a8780b27cc322d54308e2ea7b46", null ],
      [ "matrix", "struct_transform.html#a9f47592330b528d07c626041e0bea6aa", null ],
      [ "rotation", "struct_transform.html#a273d0597bb304555eda279c0348a5045", null ],
      [ "scale", "struct_transform.html#adaa9e8f53f959a63253e07014a2c45ae", null ],
      [ "translation", "struct_transform.html#aa5a7eb9a0a5e68b0f49ab4fcbe2ec735", null ]
    ] ],
    [ "Value", "union_value.html", [
      [ "builtin_value", "union_value.html#acfd06f292ee14381c58bea703052c574", null ],
      [ "color_rgba", "union_value.html#a662d56e693a1c6e0513bd90d713b13d5", null ],
      [ "constant_reference", "union_value.html#a69593a2e2499379152dca9ec5a19d145", null ],
      [ "degrees", "union_value.html#aad71fdf1e40dd862603ffd3ac71eb02e", null ],
      [ "enum_value_reference", "union_value.html#abe23b36c92e3fd4b7c5fdb4867342154", null ],
      [ "literal_value", "union_value.html#ad2062eccd0d52e82ff03d3225b5ec679", null ],
      [ "matrix4x4", "union_value.html#ab0964cf1be09c7efb754c9267ee657b4", null ],
      [ "quaternion", "union_value.html#ab1dda99e67a2aed394c22610ab86e81a", null ],
      [ "transform", "union_value.html#ab738887247d2520ade91944f9cb84fb8", null ],
      [ "variable_id", "union_value.html#a95570c7b2a24e2bfa41b3fc82c05703e", null ],
      [ "vector1", "union_value.html#a51f36dd09212f2a209000f601761fa61", null ],
      [ "vector2", "union_value.html#acc358d4c432b5894a5dcca5625157516", null ],
      [ "vector3", "union_value.html#ae57e2183249bdd571f18c11e877145f3", null ],
      [ "vector4", "union_value.html#a9d079e2d660f58ce047ccda2b33b6d45", null ]
    ] ],
    [ "FloatValue", "struct_float_value.html", [
      [ "value", "struct_float_value.html#a250b63a438e55353ac8465911eddf2b3", null ],
      [ "variable_id", "struct_float_value.html#ae2413aa38c7e453781c783ab4e9b781d", null ]
    ] ],
    [ "Vector2Value", "struct_vector2_value.html", [
      [ "value", "struct_vector2_value.html#a8efdeadbc0d05b53e4d6771b74005e9c", null ],
      [ "variable_id", "struct_vector2_value.html#a76a068ea1ae24ff1348ed74de343f263", null ]
    ] ],
    [ "Vector3Value", "struct_vector3_value.html", [
      [ "value", "struct_vector3_value.html#af147eadd225fb73ea8c3ffa2b8555df2", null ],
      [ "variable_id", "struct_vector3_value.html#a3a69ce5636fba4538967fd86f22fab57", null ]
    ] ],
    [ "Vector4Value", "struct_vector4_value.html", [
      [ "value", "struct_vector4_value.html#a3754f94133a6cfd255571ffc0372d738", null ],
      [ "variable_id", "struct_vector4_value.html#a779829f1ad9075734218a9c30c00afad", null ]
    ] ],
    [ "Matrix4Value", "struct_matrix4_value.html", [
      [ "value", "struct_matrix4_value.html#a494841dfa40ff3cffc37bc8469c2300b", null ],
      [ "variable_id", "struct_matrix4_value.html#a56acd69074c96c475b863593097a55cb", null ]
    ] ],
    [ "ColorRgbaValue", "struct_color_rgba_value.html", [
      [ "value", "struct_color_rgba_value.html#a92a741bc507c2ff196cb0bec176f9106", null ],
      [ "variable_id", "struct_color_rgba_value.html#ace83fe7f1936b5dbe6096ec6ee2cb60d", null ]
    ] ],
    [ "QuaternionValue", "struct_quaternion_value.html", [
      [ "value", "struct_quaternion_value.html#af01ece4046e5403122d40f04647e943c", null ],
      [ "variable_id", "struct_quaternion_value.html#ada333f3d1da7d6480b87468cc08c72d3", null ]
    ] ],
    [ "Metrics", "struct_metrics.html", [
      [ "scale_x", "struct_metrics.html#a0d0ae24344b467aa33f0a5bc8387d3f2", null ],
      [ "scale_y", "struct_metrics.html#a03befa543988a04bd6defc90298f26c2", null ],
      [ "scale_z", "struct_metrics.html#a19d2f8e818a5b69de412fab6c5f97a87", null ]
    ] ],
    [ "BoundingBox", "struct_bounding_box.html", [
      [ "max", "struct_bounding_box.html#a6f7a2f5b16a1309de7b13c78dbd7ada7", null ],
      [ "min", "struct_bounding_box.html#a6d1778b0fafb40c7962d3a9f820e49db", null ]
    ] ],
    [ "HitTestBehavior", "group__scenic.html#ga652be420b00936d4bc14d5202586b6b1", [
      [ "kDefault", "group__scenic.html#gga652be420b00936d4bc14d5202586b6b1a398a2c1952b274e43d9ab637830d9737", null ],
      [ "kSuppress", "group__scenic.html#gga652be420b00936d4bc14d5202586b6b1aa1b3d715949b8f648a09dc4fd5a460b4", null ]
    ] ],
    [ "ImportSpec", "group__scenic.html#ga95be84cf0ac2f124a86b3694aa9d368d", null ],
    [ "MemoryType", "group__scenic.html#ga462bfa9dfea81692463ecb192183dd01", [
      [ "HOST_MEMORY", "group__scenic.html#gga462bfa9dfea81692463ecb192183dd01abc6cef0ae64b728299c5567f31162e95", null ],
      [ "VK_DEVICE_MEMORY", "group__scenic.html#gga462bfa9dfea81692463ecb192183dd01abe33b40d577d27f6669e6253051d7c08", null ]
    ] ],
    [ "MeshIndexFormat", "group__scenic.html#ga80661562c3b8e7ab9705da3b798831c3", [
      [ "kUint16", "group__scenic.html#gga80661562c3b8e7ab9705da3b798831c3a71a73adfc25ed7137f2fd782524b1111", null ]
    ] ],
    [ "kLabelMaxLength", "group__scenic.html#ga1d178679266fe1605e6acf904394060e", null ],
    [ "kMetricsEventMask", "group__scenic.html#gad4f132b98be572044a9dc2a5dd9005f0", null ]
];