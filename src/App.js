import React, { useState, useEffect } from "react";
import './App.scss';
import { Search } from './search';

import DataAnalysis from "./DataAnalysis";
import { ContosoSlider } from "./contoso_slider";
import { PipelineSlider } from "./pipeline_slider";


function App() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  const renderContent = () => (
    <div className="Parallax__content">
      <div className="Parallax__content__header">
        <h1 className="Parallax__content__heading">
          Microsoft Azure SLAM Team Research Analysis
        </h1>
        <div style={{backgroundColor: "#87CEEB", padding: "18px"}}>
        <h3>
          Joseph Oh, Minseok Choi, Emily Giverts, Anton Tyler
        </h3>
        <p>
          &emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel leo vitae nibh scelerisque finibus. Nam malesuada nisi ipsum, id ornare orci porta et. Quisque sodales augue vitae egestas elementum. Proin molestie tellus vitae leo eleifend sollicitudin. Proin ac tempus metus. Curabitur non nunc risus. Nunc ornare, purus in varius faucibus, nulla mauris blandit odio, quis gravida quam ex vel nisl. Pellentesque malesuada nisi vel tortor cursus, in volutpat eros porta. Nunc elementum in metus nec auctor. Etiam ac ex egestas, viverra nisl sed, eleifend massa. Donec iaculis accumsan leo, eu interdum tortor maximus ut. Nulla sagittis nisl vestibulum auctor iaculis. Mauris enim urna, lobortis at nunc in, eleifend iaculis mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id placerat quam, sit amet tempus nunc. Integer eget aliquam sem.
        </p>
        </div>
      </div>
      <div className="Parallax__content__topics" style={{ transform: `translateY(${-offsetY * 0.5}px)` }}>
        <div className="Parallax__content__topics__texts">
          <h2> Introduction </h2>
            <p>
              &emsp; In order to keep Microsoft Azure services sustainable and secure, research is needed. Microsoft supports over a billion users whether it be with a product or service. Maintaining confidentiality with user information is a top priority along with the integrity of their data. By conducting research and analysis of the data captured by the Microsoft Defender Endpoint service and one other, we can take the necessary steps ensure those priorities are being met.

              It's not so much of a problem that a need isn't being met, however as adversaries continue to evolve along with their TTPs, the need to make sure that we are protecting the user along with their data is the main focus.

              If there was no action taken, it is very likely that user PII and data would be compromised, which would amount to tragic losses considering the amount of impact globally these services have.
            </p>
        </div>
        <div className="Parallax__content__topics__texts">
          <h2> Information Problem </h2>
            <p>
              &emsp; As our problem pertains to data security, the entirety of our problem can be solved through an information solution. We essentially have a large amount of data and have to conduct behavioral analysis. The data will be analyzed using a wide array of technology and techniques to find meaningful correlations. The biggest problem we are solving is that the data hold no substance alone and must be analyzed.
            </p>
        </div>
        <div className="Parallax__content__topics__texts">
          <h2> Research </h2>
          <div className="content">
            <p>
              &emsp; To protect the integrity and confidentiality of client data, internal and Microsoft owned tools were used to conduct the analysis. The data has also been scrubbed for PII and underwent CELA review prior to our initial reception.
            </p>
            <h3>
              1. Key terms
            </h3>
            <p> &emsp; Understanding Azure policies and initiatives is central to this research. That is where the data is coming from. Azure Policy is a service in Azure which allows you create polices which enforce and control the properties of a resource. When these policies are used, they enforce different rules and effects over your resources, so those resources stay compliant with your IT governance standards. </p>
            <p> &emsp; Azure initiative is a collection of Azure policy definitions that are grouped together towards a specific goal or purpose in mind. </p>
            <h3>
              2. Technology stack
            </h3>
            <ul>
              <li className='subtitle'>Azure DevOps Pipeline Integration </li>
              <p>&emsp; The first phase of our research included the utilization of Azure Devops and a Github repository containing scripts for creating custom Azure policies while the status of our data was pending. The goal was to create mock data by running scripts that test Azure policies against a service. The was important as we needed to see anomalous behaviour and practice analysing it. </p>
              <li className='subtitle'>Microsoft Azure Log & Analytics Workspace </li>
              <p>&emsp; Once the policies are run, they produce large amounts of data that are laid out in detail. Behind the layout is key information that is parted from the JSON file that the event is contained in.  </p>
              <li className='subtitle'>Excel</li>
              <p>&emsp; This tool is used to store our individual queries, data produced, as well as any insights we produce. The end goal is to transfer the information into a user-friendly medium. </p>
            </ul>

            <h3>
              3. Personas
            </h3>
            <p>&emsp; In order to provide an analysis of the data that meets the expectations of everyone in the Microsoft SLAM team who will interact with it, we created personas based off of employee input. </p>
            <p>&emsp; Shogun here, is a persona used to create a shared understanding amongst our team for a specific type of user that will utilize our research. </p>

            <h3>
              4. Research Findings (mock NSG logs from Contoso Hotel)
            </h3>
            <ul>
              <li className='subtitle'>Qualitative</li>
              <p>&emsp; We performed interviews with SLAM team members to learn first-hand about the capabilities and requirements of the solution. Through the walk throughs, our main takeaways included: </p>
              <ol>
                <li>Organization and color-coding of documentation should be utilized </li>
                <li>Making sure signals are correct and relevant is essential </li>
                <li>Visualizations are an important aspect of the solution but mostly as a form of background information </li>
              </ol>
              <li className='subtitle'>Quantitative</li>
              <ul>
                <li>We extracted the top 5 most frequently failed requests and created a bar chart to visualize the current vulnerabilities and their frequencies/severities. As a result, we were able to identify that GET Employees/Create and GET Customers/Details are the most notable failed requests that could be a huge drawback to the server’s performance. </li>
                <li>To measure the drawbacks of the vulnerabilities we found above, we aimed to calculate the average duration when those frequently failed requests were called. Along the way, we also noticed that the durations of different API calls contain various outliers, so we added a percentile duration analysis to break down the average duration more in depth. </li>
                <li>We aimed to find out the root cause of those frequently failed requests by looking at the error code that is thrown when a user requests those APIs. We were able to conclude that GET Employees/Create API causes a 404 error which signifies the server was not able to find anything that matches the Request-URI. Also, for GET Customers/Details API, 500 error code has been occurring for most of the requests.</li>
                <li>There was no rate limiting for API request which users with malicious intention can conduct DoS attack. This can threaten the data security and reduce the performance for web application. I had called 10000API request to create tickets for Contoso Hotel which drastically increased the percentage of ServiceTickets/Create API request. This vulnerability can potentially threaten the server and data security. </li>
              </ul>
            </ul>
          </div>
        </div>
        <DataAnalysis/>
      </div>

    </div>
  );

  return (
    <div>
      <section className="Parallax">
        <div
          className="Parallax__background"
          
          />
        {/* <div
          className="Parallax__background-triangles"
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        /> */}
        {renderContent()}
      </section>
      <ContosoSlider/>
      <PipelineSlider/>
      <Search/>
    </div>
  );
}

export default App;
