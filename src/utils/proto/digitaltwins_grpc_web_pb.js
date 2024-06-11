/**
 * @fileoverview gRPC-Web generated client stub for greet
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.greet = require('./digitaltwins_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greet.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greet.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.ConveyorRequest,
 *   !proto.greet.StasticModelReply>}
 */
const methodDescriptor_Greeter_Conveyor = new grpc.web.MethodDescriptor(
  '/greet.Greeter/Conveyor',
  grpc.web.MethodType.UNARY,
  proto.greet.ConveyorRequest,
  proto.greet.StasticModelReply,
  /**
   * @param {!proto.greet.ConveyorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.StasticModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.ConveyorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.StasticModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.StasticModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.conveyor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/Conveyor',
      request,
      metadata || {},
      methodDescriptor_Greeter_Conveyor,
      callback);
};


/**
 * @param {!proto.greet.ConveyorRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.StasticModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.conveyor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/Conveyor',
      request,
      metadata || {},
      methodDescriptor_Greeter_Conveyor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.EquipmentRequest,
 *   !proto.greet.StasticModelReply>}
 */
const methodDescriptor_Greeter_Equipment = new grpc.web.MethodDescriptor(
  '/greet.Greeter/Equipment',
  grpc.web.MethodType.UNARY,
  proto.greet.EquipmentRequest,
  proto.greet.StasticModelReply,
  /**
   * @param {!proto.greet.EquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.StasticModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.EquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.StasticModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.StasticModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.equipment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/Equipment',
      request,
      metadata || {},
      methodDescriptor_Greeter_Equipment,
      callback);
};


/**
 * @param {!proto.greet.EquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.StasticModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.equipment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/Equipment',
      request,
      metadata || {},
      methodDescriptor_Greeter_Equipment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.WarehouseRequest,
 *   !proto.greet.StasticModelReply>}
 */
const methodDescriptor_Greeter_Warehouse = new grpc.web.MethodDescriptor(
  '/greet.Greeter/Warehouse',
  grpc.web.MethodType.UNARY,
  proto.greet.WarehouseRequest,
  proto.greet.StasticModelReply,
  /**
   * @param {!proto.greet.WarehouseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.StasticModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.WarehouseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.StasticModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.StasticModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.warehouse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/Warehouse',
      request,
      metadata || {},
      methodDescriptor_Greeter_Warehouse,
      callback);
};


/**
 * @param {!proto.greet.WarehouseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.StasticModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.warehouse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/Warehouse',
      request,
      metadata || {},
      methodDescriptor_Greeter_Warehouse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.MaterialRequest,
 *   !proto.greet.StasticModelReply>}
 */
const methodDescriptor_Greeter_Material = new grpc.web.MethodDescriptor(
  '/greet.Greeter/Material',
  grpc.web.MethodType.UNARY,
  proto.greet.MaterialRequest,
  proto.greet.StasticModelReply,
  /**
   * @param {!proto.greet.MaterialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.StasticModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.MaterialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.StasticModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.StasticModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.material =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/Material',
      request,
      metadata || {},
      methodDescriptor_Greeter_Material,
      callback);
};


/**
 * @param {!proto.greet.MaterialRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.StasticModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.material =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/Material',
      request,
      metadata || {},
      methodDescriptor_Greeter_Material);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.ContainerRequest,
 *   !proto.greet.StasticModelReply>}
 */
const methodDescriptor_Greeter_Container = new grpc.web.MethodDescriptor(
  '/greet.Greeter/Container',
  grpc.web.MethodType.UNARY,
  proto.greet.ContainerRequest,
  proto.greet.StasticModelReply,
  /**
   * @param {!proto.greet.ContainerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.StasticModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.ContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.StasticModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.StasticModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.container =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/Container',
      request,
      metadata || {},
      methodDescriptor_Greeter_Container,
      callback);
};


/**
 * @param {!proto.greet.ContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.StasticModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.container =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/Container',
      request,
      metadata || {},
      methodDescriptor_Greeter_Container);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.SimulationRequest,
 *   !proto.greet.SimulationReply>}
 */
const methodDescriptor_Greeter_Simulation = new grpc.web.MethodDescriptor(
  '/greet.Greeter/Simulation',
  grpc.web.MethodType.UNARY,
  proto.greet.SimulationRequest,
  proto.greet.SimulationReply,
  /**
   * @param {!proto.greet.SimulationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.SimulationReply.deserializeBinary
);


/**
 * @param {!proto.greet.SimulationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.SimulationReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.SimulationReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.simulation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/Simulation',
      request,
      metadata || {},
      methodDescriptor_Greeter_Simulation,
      callback);
};


/**
 * @param {!proto.greet.SimulationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.SimulationReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.simulation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/Simulation',
      request,
      metadata || {},
      methodDescriptor_Greeter_Simulation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.WorkFlowRequest,
 *   !proto.greet.StasticModelReply>}
 */
const methodDescriptor_Greeter_WorkFlow = new grpc.web.MethodDescriptor(
  '/greet.Greeter/WorkFlow',
  grpc.web.MethodType.UNARY,
  proto.greet.WorkFlowRequest,
  proto.greet.StasticModelReply,
  /**
   * @param {!proto.greet.WorkFlowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.StasticModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.WorkFlowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.StasticModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.StasticModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.workFlow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/WorkFlow',
      request,
      metadata || {},
      methodDescriptor_Greeter_WorkFlow,
      callback);
};


/**
 * @param {!proto.greet.WorkFlowRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.StasticModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.workFlow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/WorkFlow',
      request,
      metadata || {},
      methodDescriptor_Greeter_WorkFlow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.MockRequest,
 *   !proto.greet.MockReply>}
 */
const methodDescriptor_Greeter_Mock = new grpc.web.MethodDescriptor(
  '/greet.Greeter/Mock',
  grpc.web.MethodType.UNARY,
  proto.greet.MockRequest,
  proto.greet.MockReply,
  /**
   * @param {!proto.greet.MockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.MockReply.deserializeBinary
);


/**
 * @param {!proto.greet.MockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.MockReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.MockReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.mock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/Mock',
      request,
      metadata || {},
      methodDescriptor_Greeter_Mock,
      callback);
};


/**
 * @param {!proto.greet.MockRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.MockReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.mock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/Mock',
      request,
      metadata || {},
      methodDescriptor_Greeter_Mock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.MockStateInfoRequest,
 *   !proto.greet.MockStateInfoReply>}
 */
const methodDescriptor_Greeter_MockGoodsInfo = new grpc.web.MethodDescriptor(
  '/greet.Greeter/MockGoodsInfo',
  grpc.web.MethodType.UNARY,
  proto.greet.MockStateInfoRequest,
  proto.greet.MockStateInfoReply,
  /**
   * @param {!proto.greet.MockStateInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.MockStateInfoReply.deserializeBinary
);


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.MockStateInfoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.MockStateInfoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.mockGoodsInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/MockGoodsInfo',
      request,
      metadata || {},
      methodDescriptor_Greeter_MockGoodsInfo,
      callback);
};


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.MockStateInfoReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.mockGoodsInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/MockGoodsInfo',
      request,
      metadata || {},
      methodDescriptor_Greeter_MockGoodsInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.MockStateInfoRequest,
 *   !proto.greet.StasticModelReply>}
 */
const methodDescriptor_Greeter_GetInitialModel = new grpc.web.MethodDescriptor(
  '/greet.Greeter/GetInitialModel',
  grpc.web.MethodType.UNARY,
  proto.greet.MockStateInfoRequest,
  proto.greet.StasticModelReply,
  /**
   * @param {!proto.greet.MockStateInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.StasticModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.StasticModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.StasticModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.getInitialModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/GetInitialModel',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetInitialModel,
      callback);
};


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.StasticModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.getInitialModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/GetInitialModel',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetInitialModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.CountRequest,
 *   !proto.greet.CountWarehouseReply>}
 */
const methodDescriptor_Greeter_CountWarehouse = new grpc.web.MethodDescriptor(
  '/greet.Greeter/CountWarehouse',
  grpc.web.MethodType.UNARY,
  proto.greet.CountRequest,
  proto.greet.CountWarehouseReply,
  /**
   * @param {!proto.greet.CountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.CountWarehouseReply.deserializeBinary
);


/**
 * @param {!proto.greet.CountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.CountWarehouseReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.CountWarehouseReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.countWarehouse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/CountWarehouse',
      request,
      metadata || {},
      methodDescriptor_Greeter_CountWarehouse,
      callback);
};


/**
 * @param {!proto.greet.CountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.CountWarehouseReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.countWarehouse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/CountWarehouse',
      request,
      metadata || {},
      methodDescriptor_Greeter_CountWarehouse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.CountRequest,
 *   !proto.greet.CountEquipmentReply>}
 */
const methodDescriptor_Greeter_CountEquipment = new grpc.web.MethodDescriptor(
  '/greet.Greeter/CountEquipment',
  grpc.web.MethodType.UNARY,
  proto.greet.CountRequest,
  proto.greet.CountEquipmentReply,
  /**
   * @param {!proto.greet.CountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.CountEquipmentReply.deserializeBinary
);


/**
 * @param {!proto.greet.CountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.CountEquipmentReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.CountEquipmentReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.countEquipment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/CountEquipment',
      request,
      metadata || {},
      methodDescriptor_Greeter_CountEquipment,
      callback);
};


/**
 * @param {!proto.greet.CountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.CountEquipmentReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.countEquipment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/CountEquipment',
      request,
      metadata || {},
      methodDescriptor_Greeter_CountEquipment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.CountRequest,
 *   !proto.greet.CountConveyorReply>}
 */
const methodDescriptor_Greeter_CountConveyor = new grpc.web.MethodDescriptor(
  '/greet.Greeter/CountConveyor',
  grpc.web.MethodType.UNARY,
  proto.greet.CountRequest,
  proto.greet.CountConveyorReply,
  /**
   * @param {!proto.greet.CountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.CountConveyorReply.deserializeBinary
);


/**
 * @param {!proto.greet.CountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.CountConveyorReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.CountConveyorReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.countConveyor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/CountConveyor',
      request,
      metadata || {},
      methodDescriptor_Greeter_CountConveyor,
      callback);
};


/**
 * @param {!proto.greet.CountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.CountConveyorReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.countConveyor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/CountConveyor',
      request,
      metadata || {},
      methodDescriptor_Greeter_CountConveyor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.CountRequest,
 *   !proto.greet.CountProductionLineReply>}
 */
const methodDescriptor_Greeter_CountProductionLine = new grpc.web.MethodDescriptor(
  '/greet.Greeter/CountProductionLine',
  grpc.web.MethodType.UNARY,
  proto.greet.CountRequest,
  proto.greet.CountProductionLineReply,
  /**
   * @param {!proto.greet.CountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.CountProductionLineReply.deserializeBinary
);


/**
 * @param {!proto.greet.CountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.CountProductionLineReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.CountProductionLineReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.countProductionLine =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/CountProductionLine',
      request,
      metadata || {},
      methodDescriptor_Greeter_CountProductionLine,
      callback);
};


/**
 * @param {!proto.greet.CountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.CountProductionLineReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.countProductionLine =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/CountProductionLine',
      request,
      metadata || {},
      methodDescriptor_Greeter_CountProductionLine);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.CountRequest,
 *   !proto.greet.CountAgvReply>}
 */
const methodDescriptor_Greeter_CountAgv = new grpc.web.MethodDescriptor(
  '/greet.Greeter/CountAgv',
  grpc.web.MethodType.UNARY,
  proto.greet.CountRequest,
  proto.greet.CountAgvReply,
  /**
   * @param {!proto.greet.CountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.CountAgvReply.deserializeBinary
);


/**
 * @param {!proto.greet.CountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.CountAgvReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.CountAgvReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.countAgv =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/CountAgv',
      request,
      metadata || {},
      methodDescriptor_Greeter_CountAgv,
      callback);
};


/**
 * @param {!proto.greet.CountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.CountAgvReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.countAgv =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/CountAgv',
      request,
      metadata || {},
      methodDescriptor_Greeter_CountAgv);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.SendTaskRequest,
 *   !proto.greet.BaseModelReply>}
 */
const methodDescriptor_Greeter_SendTaskByAGV = new grpc.web.MethodDescriptor(
  '/greet.Greeter/SendTaskByAGV',
  grpc.web.MethodType.UNARY,
  proto.greet.SendTaskRequest,
  proto.greet.BaseModelReply,
  /**
   * @param {!proto.greet.SendTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.BaseModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.SendTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.BaseModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.BaseModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.sendTaskByAGV =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/SendTaskByAGV',
      request,
      metadata || {},
      methodDescriptor_Greeter_SendTaskByAGV,
      callback);
};


/**
 * @param {!proto.greet.SendTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.BaseModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.sendTaskByAGV =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/SendTaskByAGV',
      request,
      metadata || {},
      methodDescriptor_Greeter_SendTaskByAGV);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.AgvAgvMapRequest,
 *   !proto.greet.BaseModelReply>}
 */
const methodDescriptor_Greeter_GetAgvMap = new grpc.web.MethodDescriptor(
  '/greet.Greeter/GetAgvMap',
  grpc.web.MethodType.UNARY,
  proto.greet.AgvAgvMapRequest,
  proto.greet.BaseModelReply,
  /**
   * @param {!proto.greet.AgvAgvMapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.BaseModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.AgvAgvMapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.BaseModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.BaseModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.getAgvMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/GetAgvMap',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetAgvMap,
      callback);
};


/**
 * @param {!proto.greet.AgvAgvMapRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.BaseModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.getAgvMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/GetAgvMap',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetAgvMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.AgvLocationRequest,
 *   !proto.greet.BaseModelReply>}
 */
const methodDescriptor_Greeter_GetAgvLocation = new grpc.web.MethodDescriptor(
  '/greet.Greeter/GetAgvLocation',
  grpc.web.MethodType.UNARY,
  proto.greet.AgvLocationRequest,
  proto.greet.BaseModelReply,
  /**
   * @param {!proto.greet.AgvLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.BaseModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.AgvLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.BaseModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.BaseModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.getAgvLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/GetAgvLocation',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetAgvLocation,
      callback);
};


/**
 * @param {!proto.greet.AgvLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.BaseModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.getAgvLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/GetAgvLocation',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetAgvLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.StateSynclRequest,
 *   !proto.greet.BaseModelReply>}
 */
const methodDescriptor_Greeter_ModelStateSync = new grpc.web.MethodDescriptor(
  '/greet.Greeter/ModelStateSync',
  grpc.web.MethodType.UNARY,
  proto.greet.StateSynclRequest,
  proto.greet.BaseModelReply,
  /**
   * @param {!proto.greet.StateSynclRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.BaseModelReply.deserializeBinary
);


/**
 * @param {!proto.greet.StateSynclRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.BaseModelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.BaseModelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.modelStateSync =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/ModelStateSync',
      request,
      metadata || {},
      methodDescriptor_Greeter_ModelStateSync,
      callback);
};


/**
 * @param {!proto.greet.StateSynclRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.BaseModelReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.modelStateSync =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/ModelStateSync',
      request,
      metadata || {},
      methodDescriptor_Greeter_ModelStateSync);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.MockStateInfoRequest,
 *   !proto.greet.TwinsWarehouseBayStatusReply>}
 */
const methodDescriptor_Greeter_TwinsWarehouseBayStatus = new grpc.web.MethodDescriptor(
  '/greet.Greeter/TwinsWarehouseBayStatus',
  grpc.web.MethodType.UNARY,
  proto.greet.MockStateInfoRequest,
  proto.greet.TwinsWarehouseBayStatusReply,
  /**
   * @param {!proto.greet.MockStateInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.TwinsWarehouseBayStatusReply.deserializeBinary
);


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.TwinsWarehouseBayStatusReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.TwinsWarehouseBayStatusReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.twinsWarehouseBayStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/TwinsWarehouseBayStatus',
      request,
      metadata || {},
      methodDescriptor_Greeter_TwinsWarehouseBayStatus,
      callback);
};


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.TwinsWarehouseBayStatusReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.twinsWarehouseBayStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/TwinsWarehouseBayStatus',
      request,
      metadata || {},
      methodDescriptor_Greeter_TwinsWarehouseBayStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.MockStateInfoRequest,
 *   !proto.greet.TwinsAgvTaskCountReply>}
 */
const methodDescriptor_Greeter_TwinsAgvTaskCount = new grpc.web.MethodDescriptor(
  '/greet.Greeter/TwinsAgvTaskCount',
  grpc.web.MethodType.UNARY,
  proto.greet.MockStateInfoRequest,
  proto.greet.TwinsAgvTaskCountReply,
  /**
   * @param {!proto.greet.MockStateInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.TwinsAgvTaskCountReply.deserializeBinary
);


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.TwinsAgvTaskCountReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.TwinsAgvTaskCountReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.twinsAgvTaskCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/TwinsAgvTaskCount',
      request,
      metadata || {},
      methodDescriptor_Greeter_TwinsAgvTaskCount,
      callback);
};


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.TwinsAgvTaskCountReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.twinsAgvTaskCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/TwinsAgvTaskCount',
      request,
      metadata || {},
      methodDescriptor_Greeter_TwinsAgvTaskCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.MockStateInfoRequest,
 *   !proto.greet.TwinsWarehouseCountReply>}
 */
const methodDescriptor_Greeter_TwinsWarehouseCount = new grpc.web.MethodDescriptor(
  '/greet.Greeter/TwinsWarehouseCount',
  grpc.web.MethodType.UNARY,
  proto.greet.MockStateInfoRequest,
  proto.greet.TwinsWarehouseCountReply,
  /**
   * @param {!proto.greet.MockStateInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.TwinsWarehouseCountReply.deserializeBinary
);


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.TwinsWarehouseCountReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.TwinsWarehouseCountReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.twinsWarehouseCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/TwinsWarehouseCount',
      request,
      metadata || {},
      methodDescriptor_Greeter_TwinsWarehouseCount,
      callback);
};


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.TwinsWarehouseCountReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.twinsWarehouseCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/TwinsWarehouseCount',
      request,
      metadata || {},
      methodDescriptor_Greeter_TwinsWarehouseCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.MockStateInfoRequest,
 *   !proto.greet.TwinsStockMovementCountReply>}
 */
const methodDescriptor_Greeter_TwinsStockMovementCount = new grpc.web.MethodDescriptor(
  '/greet.Greeter/TwinsStockMovementCount',
  grpc.web.MethodType.UNARY,
  proto.greet.MockStateInfoRequest,
  proto.greet.TwinsStockMovementCountReply,
  /**
   * @param {!proto.greet.MockStateInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.TwinsStockMovementCountReply.deserializeBinary
);


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.TwinsStockMovementCountReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.TwinsStockMovementCountReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.twinsStockMovementCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/TwinsStockMovementCount',
      request,
      metadata || {},
      methodDescriptor_Greeter_TwinsStockMovementCount,
      callback);
};


/**
 * @param {!proto.greet.MockStateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.TwinsStockMovementCountReply>}
 *     Promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.twinsStockMovementCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/TwinsStockMovementCount',
      request,
      metadata || {},
      methodDescriptor_Greeter_TwinsStockMovementCount);
};


module.exports = proto.greet;

