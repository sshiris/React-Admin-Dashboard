import "./widgetLG.css";

export default function WidgetLG() {
  const Button = ({ type }) => {
    return <button className={"widgetLGBtn " + type}>{type}</button>;
  };
  return (
    <div className="widgetLG">
      <h3 className="widgetLGTitle">Lastest Transctions</h3>
      <table className="widgetLGTable">
        <tr className="widgetLGTr">
          <th className="widgetLGTh">Customer</th>
          <th className="widgetLGTh">Date</th>
          <th className="widgetLGTh">Amount</th>
          <th className="widgetLGTh">Status</th>
        </tr>
        <tr className="widgetLGTr">
          <td className="widgetLGUser">
            <img
              className="widgetLGImg"
              src="./image/profile.jpeg"
              alt="TbUserProfile"
            />
            <span className="widgetLGUserName">Iris Fan</span>
          </td>
          <td className="widgetLGDate">1 July 2024</td>
          <td className="widgetLGAmount">$7809</td>
          <td className="widgetLGStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLGTr">
          <td className="widgetLGUser">
            <img
              className="widgetLGImg"
              src="./image/profile.jpeg"
              alt="TbUserProfile"
            />
            <span className="widgetLGUserName">Iris Fan</span>
          </td>
          <td className="widgetLGDate">1 July 2024</td>
          <td className="widgetLGAmount">$7809</td>
          <td className="widgetLGStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLGTr">
          <td className="widgetLGUser">
            <img
              className="widgetLGImg"
              src="./image/profile.jpeg"
              alt="TbUserProfile"
            />
            <span className="widgetLGUserName">Iris Fan</span>
          </td>
          <td className="widgetLGDate">1 July 2024</td>
          <td className="widgetLGAmount">$7809</td>
          <td className="widgetLGStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLGTr">
          <td className="widgetLGUser">
            <img
              className="widgetLGImg"
              src="./image/profile.jpeg"
              alt="TbUserProfile"
            />
            <span className="widgetLGUserName">Iris Fan</span>
          </td>
          <td className="widgetLGDate">1 July 2024</td>
          <td className="widgetLGAmount">$7809</td>
          <td className="widgetLGStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLGTr">
          <td className="widgetLGUser">
            <img
              className="widgetLGImg"
              src="./image/profile.jpeg"
              alt="TbUserProfile"
            />
            <span className="widgetLGUserName">Iris Fan</span>
          </td>
          <td className="widgetLGDate">1 July 2024</td>
          <td className="widgetLGAmount">$7809</td>
          <td className="widgetLGStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
