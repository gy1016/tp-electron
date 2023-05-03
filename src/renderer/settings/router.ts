import { createElement } from "react";
import { TpRouterProps } from "@/renderer/types/global";
import {
  SnippetsOutlined,
  LineChartOutlined,
  EditOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

const TpRouterArr: Array<TpRouterProps> = [
  {
    key: "task",
    label: "面板",
    icon: createElement(SnippetsOutlined),
  },
  {
    key: "analysis",
    label: "分析",
    icon: createElement(LineChartOutlined),
  },
  {
    key: "today",
    label: "今日",
    icon: createElement(EditOutlined),
  },
  {
    key: "source",
    label: "上传",
    icon: createElement(FolderOpenOutlined),
  },
];

export default TpRouterArr;
