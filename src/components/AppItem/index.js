import './index.css'

const AppItem = props => {
  const {applist} = props
  return (
    <div className="app-con">
      <ul className="applist-container">
        {applist.map(each => (
          <li className="app-card" key={each.appId}>
            <img src={each.imageUrl} alt="img" className="app-card-img" />
            <p>{each.appName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppItem
