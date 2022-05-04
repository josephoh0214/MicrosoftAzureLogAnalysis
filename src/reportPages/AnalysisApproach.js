import React from "react";
import '../generalPages/general.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"


const AnalysisApproach = ({width, height}) => {
    const navigate = useNavigate();

    return (
        <div style={{ width: width, height: height }} className="box">
            <div className="container">
                <h1 className="title" >
                Analysis Approach 
                </h1>
                <p className="text">
                Our first course of action when reviewing logs is figuring out what we’re trying to find - in other words is there an event that I am looking for, something I'm troubleshooting, etc. Next - in the case of these exported logs to CSV, we would generally put them into a data filter so I can sort by ResourceType / Resource Name find things such as event, or anything interesting. 

In addition, the activity logs are interesting usually to determine things such as what has happened according to some sort of correlation ID and tracking that through the system. You get ordered events where you can see something occurring and see failures. If there are failures, what is happening such as a GET or a PUT request or a failed write, etc. 
 
When looking at the different headers, it was important to accurately define them and understand their purpose. With our sponsor’s help we gained many different insights.  

Started and Success means something sometimes but also started followed by a failed can tell you something. 

Caller is who is making the request so you can figure out who is making the call or what they are doing, and you could see something like a brute force attack if you see a bunch of failures followed by some successes. Caller IP address being key in this case especially if you see the same call coming from multiple IP addresses, could be a coordinated attack from various entry points. 

Looking at resourceID in Activity Logs give the ability to potentially cross reference that in Log Analytics Diagnostic settings (if it is a PaaS resource) to determine things such as some event and the response. 

Last thing is time stamp can be telling and is key in triage. That is why filtering the data can be super helpful or selecting a subset so you can look at it within a scope versus all the data. You can do this in KQL which means you can do multiple facets to reduce the scope down until you are seeing what you are wanting to see. There are also premade/common queries in Log Analytic workspace that helps.                 </p>
                
            </div>
           <FaArrowLeft size={100} onClick={() => navigate(-1)}/>
            
        </div>
    );
}

export default AnalysisApproach;