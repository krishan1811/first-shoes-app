function Button({ action, code }) {
  return (
    <>
      <button className={code}>{action}</button>
    </>
  );
}

export default Button;
