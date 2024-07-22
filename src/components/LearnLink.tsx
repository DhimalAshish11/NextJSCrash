import Link from "next/link";
import React from "react";

const LearnLink = () => {
  const id = 2;
  return (
    <div>
      <Link href="admin/dashboard">Go to Admin DashBoard</Link> <br />
      <Link href={`/user/profile/${id}`}>Go to UserProfile</Link>
    </div>
  );
};

export default LearnLink;
