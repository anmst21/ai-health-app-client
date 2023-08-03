import React from "react";
import Link from "next/link";
import Image from "next/image";

const SettingsLinks = () => {
  return (
    <div>
      <div className="settings-page__dropdown">
        <div className="settings-page__dropdown--corner">
          <Link
            href="/auth/password-reset"
            className="settings-page__dropdown--element settings-page__dropdown--element-1"
          >
            <h2>Change Password</h2>
            <Image
              alt="key icon"
              src="/key-password-icon.svg"
              width="30"
              height="30"
            />
          </Link>
          <hr class="settings-page__dropdown--line" />
          <Link
            href="/api/logout"
            className="settings-page__dropdown--element settings-page__dropdown--element-2"
          >
            <h2>Logout</h2>
            <Image
              alt="lougout icon"
              src="/logout-icon-leave.svg"
              width="30"
              height="30"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsLinks;
