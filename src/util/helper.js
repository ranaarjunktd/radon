const date= function(){
    const currentDate = new Date()
    console.log(currentDate)
}

const month= function(){
    const currentDate = new Date()
    const month =currentDate.getMonth()
    console.log(month +1)
}

const batchInfo=function(){
    

    console.log("Arjun W3D3 i learn today about node js" )
}

module.exports={date,month,batchInfo}
