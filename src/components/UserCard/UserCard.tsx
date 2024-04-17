import { WelcomeUser, Avatar } from "./UserCard.styles";

const UserCard = ({
  name,
  avatar,
}: {
  name: string | null;
  avatar: string | null;
}) => {
  return (
    <WelcomeUser>
      <Avatar>
        {avatar && (
          <img
            src={avatar}
            width={100}
            height={70}
            className="App-avatar"
            alt="Avatar"
          />
        )}
      </Avatar>
      <p>Welcome, {name}!</p>
    </WelcomeUser>
  );
};

export default UserCard;
