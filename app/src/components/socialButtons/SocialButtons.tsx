import * as React from "react";
import * as FontAwesome from "react-fontawesome";

interface PropTypes {
  social: string[];
}

export const SocialButtons: React.StatelessComponent<PropTypes> = ({ social }) => (
  <div className="social-btns">
    {social.map((name: string) => (
      <div key={name}>
        <FontAwesome name={name} />
      </div>
    ))}
  </div>
);
