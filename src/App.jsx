import UserProfile from "./components/UserProfile";
const App = () => {
  return (
    <div className="h-screen flex flex-cols items-center justify-center">
      {/* <UserProfile name="James" age="20" bio="I am a developer"></UserProfile>
       */}
      <UserProfile></UserProfile>
    </div>
  );
};
export default App;
