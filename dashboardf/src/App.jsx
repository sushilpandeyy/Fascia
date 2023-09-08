
import Dashboard from "./scenes/dashboard";
import Layout from "./scenes/Layout";

function App() {
  const mode= useSelecto((state) => state.global.mode);
  const theme= useMemo(()=> createTheme(themeSettings(mode)), [mode]);
 

  return (
    <>
      <Layout/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
