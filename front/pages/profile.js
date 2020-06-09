import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const profile = () => {
	const followerList = [
		{ nickname: 'doum' },
		{ nickname: 'jane' },
		{ nickname: 'tom' },
	];
	const followingList = [
		{ nickname: 'doum' },
		{ nickname: 'tom' },
		{ nickname: 'lee' },
	];
	return (
		<>
			<Head>
				<title>내 프로필 | NodeBird</title>
			</Head>
			<AppLayout>
				<NicknameEditForm />
				<FollowList header="팔로잉 목록" data={followingList} />
				<FollowList header="팔로워 목록" data={followerList} />
			</AppLayout>
		</>
	);
};

export default profile;
