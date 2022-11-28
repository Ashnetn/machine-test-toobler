import './index.css'

function StatisticsWidgets (props) {
    const {infoName, info}=props
    return (
        <div className="card">
            <h1 className="info-name">{`Total ${infoName}`}</h1>
            <p className="info-count">{info}</p>
        </div>
    )
}

export default StatisticsWidgets