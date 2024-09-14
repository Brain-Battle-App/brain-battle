import { Client, Databases, Functions } from 'react-native-appwrite';
import { project, gameplay, key } from '../lib/app-details';

const client = new Client();
client.setEndpoint(project.endpoint);
client.setProject(project.id);
client.setPlatform(project.platform);

const databases = new Databases(client);
const functions = new Functions(client);

export const findRoom = async function() {

    const result = await databases.listDocuments(gameplay.matchmakingDatabase, gameplay.battlesCollection);

    if (result.total > 0) {
        const roomDocument = result.documents[0].$id;
    } else {
        return createRoom();
    }

    // const result = databases.listDocuments(gameplay.matchmakingDatabase, gameplay.battlesCollection)
    //     .then((response) => {
    //         if (response.total > 0) {
    //             const roomDocument = response.documents[0];
    //             // return joinRoom(roomDocument.$id, roomDocument.battle_id);
    //         } else {
    //             console.log(typeof(createRoom()));
    //             return createRoom();
    //         }
    //     })
    //     .catch((exception) => (console.error(exception)));

}

export const joinRoom = function(documentID: string, battleID: string) {

    const result = databases.deleteDocument(gameplay.matchmakingDatabase, gameplay.battlesCollection, documentID)
        .then((response) => {
            const listener = client.subscribe("databases." + gameplay.matchmakingDatabase + ".collections." + battleID, (message) => {
                console.log(message);
            });
            return listener;
        })
        .catch((exception) => (console.error(exception)));

}

export const createRoom = async function() {

    const result1 = await functions.createExecution("669648b1003b5efc022d");

    const battleID = result1.responseBody;

    const listener = client.subscribe("databases." + gameplay.matchmakingDatabase + ".collections." + battleID + ".documents", (message) => {
        console.log(message);
    });

    // console.log(listener);

    // const result = functions.createExecution("669648b1003b5efc022d")
    //     .then((response) => {
    //         const battleID = response.responseBody;
    //         const listener = client.subscribe("databases." + gameplay.matchmakingDatabase + ".collections." + battleID, (message) => {
    //             console.log(message);
    //         });
    //         console.log("INSIDE" + listener);
    //         return listener;
    //     })
    //     .catch((exception) => (console.error(exception)));
    
    // console.log("OUTSIDE" + result);
    return listener;
    
}
