import Skeleton from "react-loading-skeleton";

export default function Loading({count}){
    return(

        <Skeleton count={count}
         height={40} 
         duration={2}
         baseColor="gray" 
         highlightColor="#f8f8f8" />
    );
}