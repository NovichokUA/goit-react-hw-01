import { FriendListItem } from "./FriendListItem";
import css from "../FriendList/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <div className={css.mainContainerFriend}>
      <ul className={css.listItem}>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendListItem item={friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
