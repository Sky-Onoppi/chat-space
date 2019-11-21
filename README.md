#　CHAT-SPACE設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|

- has_many :chats
- has_many :groups_users
- has_many :groups through: :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|gruopname|string|null: false|
|user_id|integer|null: false, foreign_key: true|

- has_many :chats
- has_many :groups_users
- has_many :users through: :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|chat|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
