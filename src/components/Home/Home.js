import React ,{useState,useEffect} from "react";
import Announcement from "../Announcement/Announcement";


function Home(){

    const[error,setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [postList,setPostList] = useState([]);

    const refreshPosts = () => {
        fetch("http://localhost:7015/announcements")
        .then(res =>{
            console.log(res);
            res.json()} )
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result);

            },
            (error) => {
                console.log(error);
                setIsLoaded(true);
                setError(error);

            }
        )

    }

    useEffect(() => {
        refreshPosts();
        

    }, [postList]);
    if(error){
        return <div>Error!!</div>
    }else if(!isLoaded){
        return <div>Loading...</div>
    }else{
        return (
            
        <div fixed="true" className="container">
            
             {postList.map((announcement) => (
                <div key={announcement.id}>
                    <Announcement announcementId={announcement.id} title={announcement.title} description={announcement.description} ></Announcement> 
                </div>
                           
            ) )}
      </div>
                
      
        );
    }
    

}
export default Home;