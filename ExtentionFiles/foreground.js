const init = function(){
    if (top !== window){
        let servers = $(".list-server-items li.linkserver").toArray()
        servers = servers.filter(value =>
            value.attributes.item(1)
        )
        let serversWithValues = servers.map(value => {
            if ( value.innerHTML.includes("No Ads") ){
                return {server: value, importance: 1};
            } else {
                return {server: value, importance: 2};
            }
        })
        serversWithValues.sort((a, b) => a.importance - b.importance)
        const bestAvailableServer = serversWithValues[0].server
        bestAvailableServer.click()
    }
}
init();
