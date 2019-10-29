onmessage = function (message) {
    let {data} = message;

    if(!data.hasOwnProperty('type')){
        console.error(`Should be has 'type' as string in data`);
    }

    switch(data.type){
        case 'test': {
            setTimeout(() => {
                postMessage({
                    type: 'test',
                    data: {
                        a: 2
                    }
                });
            }, 2000);
            break;
        }
    }
};
