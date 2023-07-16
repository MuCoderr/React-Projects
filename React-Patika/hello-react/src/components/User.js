import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
  if (!isLoggedIn) {
    return <div>Giriş Yapılmadı!</div>;
  }

  return (
    <>
      <h1>{`${name} ${surname}, Yaşım ${age}`}</h1>
      {address.title} {address.zip}
      <br />
      <br />
      {friends &&
        friends.map(friend => <div key={friend.id}>{friend.name}</div>)}
    </>
  );
}

User.propTypes = {
  // .isRequired bu kısmın eklenmesinin zorunlu olduğunu belirtir. Eğer proplardan gelmez ise hata verir
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  // .oneOfType() propun birden fazla veri tipini alabileceğini belirtebiliriz
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  friends: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  // prop eğer obje ise ve içinde farklı bilgiler içeriyor ise .shape() ile içindeki bilgilerin veri tiplerini belirleyebiliriz
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

// .defaultProps ile ataması yapılmamış prop'lara değer ataması yapılabilir.
// eğer prop'a atama yapılmış ise .defaultProps'a hiç bakılmaz.
User.defaultProps = {
  name: "isimsiz",
  isLoggedIn: false,
};

export default User;
