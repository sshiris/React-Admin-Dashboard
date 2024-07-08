import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../DummyData";
import WidgetSM from "../../components/widgetSM/WidgetSM";
import WidgetLG from "../../components/widgetLG/WidgetLG";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        datakey="user active"
        grid
      />
      <div className="homeWidget">
        <WidgetSM />
        <WidgetLG />
      </div>
    </div>
  );
}
