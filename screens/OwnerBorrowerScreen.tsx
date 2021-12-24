import React, {useState} from "react";
import { VStack, Center, Input, Image, Button, ScrollView, FormControl } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";
import { firebase } from "../firebase/config";

export default function OwnerBorrowerScreen() {
	const route = useRoute();
	const type = route.params.type;
  const navigation = useNavigation();
	let initialValue;
	if(type == 'owner') {
		initialValue = {name: '', dogName: '', address: '', postalCode: '', suite: '', email: '', password: '', confirmPassword: ''};
	}
	else {
		initialValue = {name: '', address: '', postalCode: '', suite: '', email: '', password: '', confirmPassword: ''};
	}
	const [formData, setData] = useState(initialValue);
  const [errors, setErrors] = useState({});
	
	const isEmpty = (): boolean => {
		let flag = false;
		let newErrors = {...errors};
		const keys = Object.keys(formData);
		for(let i = 0 ; i < keys.length ; i ++) {
			const key = keys[i];
			const value = formData[key];
			if (value === '') {
				flag = true;
				newErrors = {...newErrors, [key]: 'Required'}
			}
		}
		setErrors(newErrors);
		return flag;
	}

  const onHandleSignup = () => {
		const { name, dogName, address, postalCode, suite, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
			return;
    }
		if (!isEmpty() && Object.keys(errors).length === 0) {
			firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((response) => {
			  const uid = response.user.uid;
				let data;
				if(type == 'owner') {
					data = {
						id: uid,
						email,
						name,
						dogName,
						address,
						postalCode,
						suite,
						type,
						doggieContent: '',
						avatar: "https://firebasestorage.googleapis.com/v0/b/dog-owner-borrower.appspot.com/o/icon.png?alt=media&token=2de6e641-7f87-4c50-bb71-fce9b0f888ec",
					};
				}
				else {
					data = {
						id: uid,
						email,
						name,
						address,
						postalCode,
						suite,
						type,
						avatar: "https://firebasestorage.googleapis.com/v0/b/dog-owner-borrower.appspot.com/o/icon.png?alt=media&token=2de6e641-7f87-4c50-bb71-fce9b0f888ec",
					};
				}
			  const usersRef = firebase.firestore().collection("users");
			  usersRef
			    .doc(uid)
			    .set(data)
			    .then(() => {navigation.navigate("SignInScreen")})
			    .catch((error) => {
			      alert(error);
			    });
			})
			.catch((error) => {
			  alert(error);
			});
		}
  };
	
	const isValidation = (field: string, value: string) => {
		setData({ ...formData, [field]: value });
		if (value === '') {
			setErrors({...errors, [field]: "Required"});
		}
		else {
			if(field === 'email') {
				const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
				if (!regexp.test(value)) {
					setErrors({...errors, [field]: "Wrong Email"});
				}
				else {
					delete errors[field];
					setErrors(errors);
				}
			}
			else {
				delete errors[field];
				setErrors(errors);
			}
		}
	}

  return (
    <ScreenBox backColor="purple.100">
      <ScrollView>
        <VStack space={3}>
					<FormControl isRequired isInvalid={'name' in errors}>
          	<Input placeholder="Name" onChangeText={(value) => isValidation('name', value)} />
					</FormControl>
					{type == 'owner' && 
						<FormControl isRequired isInvalid={'dogName' in errors}>
							<Input placeholder="Dog Name" onChangeText={(value) => isValidation('dogName', value)} />
						</FormControl>
					}
					<FormControl isRequired isInvalid={'address' in errors}>
          	<Input placeholder="Address" onChangeText={(value) => isValidation('address', value)} />
					</FormControl>
					<FormControl isRequired isInvalid={'postalCode' in errors}>
          	<Input placeholder="Postal Code" onChangeText={(value) => isValidation('postalCode', value)} />
					</FormControl>
					<FormControl isRequired isInvalid={'suite' in errors}>
          	<Input placeholder="Suite" onChangeText={(value) => isValidation('suite', value)} />
					</FormControl>
					<FormControl isRequired isInvalid={'email' in errors}>
          	<Input placeholder="Email" onChangeText={(value) => isValidation('email', value)} />
					</FormControl>
					<FormControl isRequired isInvalid={'password' in errors}>
						<Input
							type="password"
							placeholder="Password"
							onChangeText={(value) => isValidation('password', value)}
						/>
					</FormControl>
					<FormControl isRequired isInvalid={'confirmPassword' in errors}>
						<Input
							type="password"
							placeholder="Verify Password"
							onChangeText={(value) => isValidation('confirmPassword', value)}
						/>
					</FormControl>
          <Button
            mt="5"
            size="lg"
            rounded="20px"
            colorScheme="rose"
            _text={{ color: "white" }}
            onPress={onHandleSignup}
          >
            Register now
          </Button>
        </VStack>
      </ScrollView>
    </ScreenBox>
  );
}
