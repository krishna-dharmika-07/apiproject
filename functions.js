function eta(traffic, distance){
    let totaltime=15+(distance*2)
    if(traffic=="true"){
        return 15+totaltime
} 
console.log("Estimated time of arrival: "+totaltime+" minutes")
}
eta(true,2)