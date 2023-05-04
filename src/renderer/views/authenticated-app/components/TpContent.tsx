import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Loading from "@/renderer/components/loading";
import { TpViewProps } from "@/renderer/types/global";

interface TpContentProps {
  collapsed: boolean;
  toggle: () => void;
  viewArr: Array<TpViewProps>;
}

const TpContent: FC<TpContentProps> = (props) => {
  const { viewArr } = props;
  const { Content } = Layout;
  const defaultView = viewArr.find((view) => view.default)?.path;

  return (
    <Layout className="auth-app-layout">
      <Content className="app-layout-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to={`/${defaultView}`} />} />
            {viewArr.map((view) => {
              return (
                <Route key={view.id} path={view.path} element={view.element} />
              );
            })}
            <Route
              path="/taskponds"
              element={<Navigate to={`/${defaultView}`} />}
            />
            <Route path="*" element={<Navigate to={`/${defaultView}`} />} />
          </Routes>
        </Suspense>
      </Content>
    </Layout>
  );
};

export default TpContent;
