import React from "react";
import './App.scss';

// images
import act_top_opertions from "./viz/act_top_operations.png"
import act_status from "./viz/act_status.png"
import act_failed_oper from "./viz/act_failed_oper.png"

import met_packet from "./viz/met_packet.png";
// import met_packet_reg from "./viz/met_packet_reg.png";

import met_log from "./viz/met_log.png";
// import met_log_reg from "./viz/met_log_reg.png";

import met_byte from "./viz/met_byte.png";
// import met_byte_reg from "./viz/met_byte_reg.png";

// data csv files
import activityData from './data/azure_activity_data.csv';
import metricData from './data/azure_metric_data.csv';

// 3rd party
import SyntaxHighlighter from 'react-syntax-highlighter';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const DataAnalysis = () => {
    return (
        <>
            <div className="Parallax__content__topics__texts">
                <h2>Data Analysis: Activity</h2>
                <a href={activityData} target="_blank" download>
                    <p>Download Azure Log Activity data</p>
                </a>
                <p>
                    &emsp; Our data analysis is based on NSG logs in Azure platform analyzed with Python library Pandas, matplotlib, seaborn, statsmodels on Jupyter Note.
                </p>
                <h3>
                    Five most common operations
                </h3>
                <div className="viz">
                    <Zoom>
                        <img src={act_top_opertions} width="500" />
                    </Zoom>
                    <SyntaxHighlighter language="python" showLineNumbers={true} wrapLines={true}>
                        {`new_data = activity_data.groupby('OperationName').TenantId.count()

new_data = new_data.sort_values(ascending=False)

new_data = new_data.head(5)

new_data.plot.bar(rot=45, title="Five Most Common Operations", color="navy", alpha=0.5);

plt.ylabel('Record Count');

plt.show(block=True);`}
                    </SyntaxHighlighter>
                </div>
                {/* <h3>
                    Log Type Percentages of Non-Failed Events
                </h3> */}
                <h3>
                    Activity Status Percentage
                </h3>
                <div className="viz">
                    <Zoom>
                        <img src={act_status} className="pie" width="500" />
                    </Zoom>
                    <SyntaxHighlighter language="python">
                        {`labels = ['Failed', 'Accepted', 'Started', 'Succeeded']

activity = activity_data.groupby('ActivityStatus').TenantId.count()

total = activity_data.ActivityStatus.count()

out = (activity / total) * 100

plt.pie(out, labels = labels)

plt.title('Activity Status %')

plt.show() `}
                    </SyntaxHighlighter>
                </div>
                <h3>
                    Looking into Total Failed Events Per Operation
                </h3>
                <div className="viz">
                    <Zoom>
                        <img src={act_failed_oper} width="500" />
                    </Zoom>
                    <SyntaxHighlighter language="python">
                        {`only_failed = activity_data[activity_data['ActivityStatus'] == 'Failed']

length = len(only_failed)

only_failed = only_failed.groupby('OperationName').TenantId.count()

new_data = only_failed.sort_values(ascending=False)

plt.rcParams.update({'font.size': 30})

fig = plt.figure(figsize=(30, 10))

new_data.plot.bar(rot=45, title="Total Failed Events Per Operation", color="green", alpha=0.5);

plt.ylabel('Record Count');`}
                    </SyntaxHighlighter>
                </div>
            </div>


            <div className="Parallax__content__topics__texts">
                <h2>Data Analysis: Metric linear regression</h2>
                <p>
                    &emsp; Our data analysis is based on NSG logs in Azure platform analyzed with Python library Pandas, matplotlib, seaborn, statsmodels on Jupyter Note.
                </p>
                <a href={metricData} target="_blank" download>
                    <p>Download Azure Log Metric data</p>
                </a>
                <h3>
                    Correlation between PacketReceivedRate vs PacketSentRate
                </h3>
                <p>
                    Since, the p-value is very small and the R-squared value is relatively big,
                    we can conclude that there is a strong correlation between our model and the dependent variable and there is a significant correlation between the two variables.
                    Random observation: looks like theres an outlier in the top middle-ish left area
                </p>
                <div className="viz">
                    <Zoom>
                        <img src={met_packet} width="500" />
                    </Zoom>
                    <SyntaxHighlighter language="python">
                        {`sent = []
received = []
    
for index, row in metric_data[metric_data["MetricName"] == 'PacketsSentRate'].iterrows():
    sent.append(row.Total)
    
for index, row in metric_data[metric_data["MetricName"] == 'PacketsReceivedRate'].iterrows():
    received.append(row.Total)

    
df = pd.DataFrame()

df["PacketSentRate"] = sent
df["PacketReceivedRate"] = received

_ =sns.regplot(y = "PacketReceivedRate", x = "PacketSentRate",
scatter_kws = {"color":"blue", "alpha":0.3, "edgecolor":"black"},
line_kws={"color":"red"},
data=df)`}
                    </SyntaxHighlighter>
                </div>

                <h3>
                    Correlation between ByteReceivedRate vs ByteSentRate
                </h3>
                <p>
                Very weak relationship, cannot accurately conclude that there is a significant correlation between both variables. Random observation: looks like theres a specific group of logs in the middle left
                </p>
                <div className="viz">
                    <Zoom>
                        <img src={met_byte} width="500" />
                    </Zoom>
                    <SyntaxHighlighter language="python">
                        {`sent = []
received = []
    
for index, row in metric_data[metric_data["MetricName"] == 'BytesSentRate'].iterrows():
    sent.append(row.Total)
    
for index, row in metric_data[metric_data["MetricName"] == 'BytesReceivedRate'].iterrows():
    received.append(row.Total)

df = pd.DataFrame()
df["ByteSentRate"] = sent
df["ByteReceivedRate"] = received

fig = plt.figure(figsize=(25, 10))

_ =sns.regplot(y = "ByteReceivedRate", x = "ByteSentRate",
scatter_kws = {"color":"red", "alpha":0.3, "edgecolor":"black"},
line_kws={"color":"green"},
data=df)

plt.rcParams.update({'font.size': 30})`}
                    </SyntaxHighlighter>
                </div>

                <h3>
                    Correlation between LogSize vs DataSize
                </h3>
                <p>
                No correlation between data size and log size at all. However, notice how there's a pattern between datasize: It loooks like logs are groups into 6 "data size groups" (the stripes). Also, it looks like there's one outlier on the very top right corner
                </p>
                <div className="viz">
                    <Zoom>
                        <img src={met_log} width="500" />
                    </Zoom>
                    <SyntaxHighlighter language="python">
                        {`data = []
log = []
    
for index, row in metric_data[metric_data["MetricName"] == 'tempdb_data_size'].iterrows():
    data.append(row.Total)
    
for index, row in metric_data[metric_data["MetricName"] == 'tempdb_log_size'].iterrows():
    log.append(row.Total)

    
df = pd.DataFrame()

df["DataSize"] = sent
df["LogSize"] = received

fig = plt.figure(figsize=(25, 10))

plt.rcParams.update({'font.size': 30})

_ =sns.regplot(y = "LogSize", x = "DataSize",
scatter_kws = {"color":"orange", "alpha":0.3, "edgecolor":"black"},
line_kws={"color":"purple"},
data=df)`}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    );
}

export default DataAnalysis;