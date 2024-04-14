function Avatar({width, height = 100}) {
  return (
    <img
      className="avatar"
      src="https://avatars.githubusercontent.com/u/65892539?v=4"
      alt="Lin Lanying"
      width={width}
      height={height}
    />
  );
}

function AvatarWrapper(props) {
  return (
    <Avatar {...props} />
  );
}

function AvatarWrapperBox({children}) {
  return (
    <div>
      {children}
    </div>
  )
}

export default function Profile() {
  return (
    <AvatarWrapperBox key={1}>
      <AvatarWrapper width={200} />
    </AvatarWrapperBox>
  );
}
