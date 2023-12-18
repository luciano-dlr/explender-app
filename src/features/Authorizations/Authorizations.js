import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuthorizationsController } from './useAuthorizationsController';
import { styles } from './styles';
import { useUserStore } from '../../zustand/useUserStore';

const Authorizations = () => {
  const { authorizationsSimulate, handleUserInfo } = useAuthorizationsController();
  const userStore = useUserStore();
  const userInfo = userStore.userInfo;

  return (
    <View style={styles.container}>
      {authorizationsSimulate.AUTORIZACIONES.map((authorization, index) => (
        <TouchableOpacity key={index} style={styles.authorizationItem}>
          <View>
            {userInfo && userInfo.USUARIO && userInfo.USUARIO[0].NOMBRE ? (
              <>
                <Text>Name: {userInfo.USUARIO[0].NOMBRE}</Text>
                <Text>CODUSUARIO: {userInfo.USUARIO[0].CODUSUARIO}</Text>
                <Text style={styles.authorizationText}>{authorization.DESCRIPCION}</Text>
                <Text style={styles.authorizationText}>{authorization.AUTORIZADODESDE}</Text>
                <Text style={styles.authorizationText}>{authorization.AUTORIZACIONTIPO}</Text>
                <Text style={styles.authorizationText}>{authorization.GRUPO}</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#0000ff" />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Authorizations;
