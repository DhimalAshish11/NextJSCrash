export default function ColorBoxLayout({ children, left, right }) {
  const IsSideBar = false;

  return (
    <section>
      {children}
      {/* {left}
      {right} */}
      {IsSideBar ? left : right}
    </section>
  );
}
