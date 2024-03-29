import { createElement, lazy } from "react";
import { TpViewProps } from "@/renderer/types/global";
import TaskPanel from "@/renderer/views/task-panel";

const AnalysisPanel = lazy(
  () =>
    import(
      /* webpackChunkName: "analysis", webpackPrefetch: true */ "@/renderer/views/analysis-panel"
    )
);
const TodayPanel = lazy(
  () =>
    import(
      /* webpackChunkName: "todayPanel", webpackPrefetch: true */ "@/renderer/views/today-panel"
    )
);
const SourcePanel = lazy(
  () =>
    import(
      /* webpackChunkName: "SourcePanel", webpackPrefetch: true */ "@/renderer/views/source-panel"
    )
);
const ErrorPage = lazy(
  () =>
    import(
      /* webpackChunkName: "error", webpackPrefetch: true */ "@/renderer/components/error"
    )
);

const TpViewArr: Array<TpViewProps> = [
  {
    id: 1,
    path: "task",
    element: createElement(TaskPanel),
    lazy: false,
    default: true,
  },
  {
    id: 2,
    path: "analysis",
    element: createElement(AnalysisPanel),
    lazy: true,
  },
  {
    id: 3,
    path: "today",
    element: createElement(TodayPanel),
    lazy: true,
  },
  {
    id: 4,
    path: "source",
    element: createElement(SourcePanel),
    lazy: true,
  },
  {
    id: 99,
    path: "*",
    element: createElement(ErrorPage),
    lazy: true,
  },
];

export default TpViewArr;
