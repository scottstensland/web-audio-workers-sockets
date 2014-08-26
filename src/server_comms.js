
var handle_comms = function() {

var route_msg = function(received_json, received_data, curr_ws) {

    console.log("received_json ", received_json);

    var requested_action = received_json.requested_action;

    if (typeof requested_action == "undefined") {

        console.error("ERROR - failed to see property : requested_action in client JSON msg");
        process.exit(8);
    };

    // callback
    // requested_source

    console.log("requested_action ", requested_action);

    switch (requested_action) {

        case "stream_audio_from_server_to_client" : {

            console.log("ooooooossseee seeing stream_audio_from_server_to_client");

            read_file_pop_buffer_stream_back_to_client(received_json, received_data, curr_ws);

            break;
        }

        case "get_audio_buffer_from_server" : {

            console.log("OOKKK seeing get_audio_buffer_from_server");

            read_file_pop_buffer_send_back_to_client(received_json, received_data, curr_ws);

            break;
        };

        case null : {

            console.log("OOKKK seeing null  requested_action");
            // send_binary_back_to_client(received_json, received_data, curr_ws);

            curr_ws.send(received_data, {binary: false, mask: true}); // send text

            break;
        };

        default : {

            console.log("ERROR - failed to recognize client requested_action : ",
                            requested_action);            
            process.exit(8);
        }
    }
};      //      route_msg


};		//		handle_comms

