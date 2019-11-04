export default function (server) {
  server.post("/api/GET_AIR_STS", function (req, res) {
    if(req){
      console.log("test req ")
    }
    return res.json({error: "miss parameter"});
  });
}
