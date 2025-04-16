# Database Schema for LegoApp

## 1. Tables

### User
- **id**: SERIAL PRIMARY KEY
- **email**: VARCHAR(255) UNIQUE NOT NULL
- **nickname**: VARCHAR(100) NOT NULL
- **password**: VARCHAR(255) NOT NULL

### LegoSet
- **id**: SERIAL PRIMARY KEY
- **name**: VARCHAR(255) NOT NULL
- **set_number**: VARCHAR(50) UNIQUE NOT NULL

### User_Set
- **user_id**: INTEGER REFERENCES User(id) ON DELETE CASCADE
- **set_id**: INTEGER REFERENCES LegoSet(id) ON DELETE CASCADE
- **owned**: BOOLEAN NOT NULL DEFAULT TRUE  -- TRUE if the set is owned, FALSE if on the wishlist
- **PRIMARY KEY (user_id, set_id)**

### Reservation
- **id**: SERIAL PRIMARY KEY
- **user_id**: INTEGER REFERENCES User(id) ON DELETE CASCADE
- **set_id**: INTEGER REFERENCES LegoSet(id) ON DELETE CASCADE
- **reservation_date**: TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
- **status**: VARCHAR(50) NOT NULL CHECK (status IN ('active', 'completed'))

### Friend
- **id**: SERIAL PRIMARY KEY
- **user_id**: INTEGER REFERENCES User(id) ON DELETE CASCADE
- **friend_id**: INTEGER REFERENCES User(id) ON DELETE CASCADE
- **invitation_status**: VARCHAR(50) NOT NULL CHECK (invitation_status IN ('pending', 'accepted'))

## 2. Relationships between Tables
- **User** (1) --- (M) **User_Set**: A user can have many Lego sets.
- **LegoSet** (1) --- (M) **User_Set**: A Lego set can be owned by many users.
- **User** (1) --- (M) **Reservation**: A user can have many reservations.
- **LegoSet** (1) --- (M) **Reservation**: A Lego set can be reserved by many users.
- **User** (M) --- (M) **Friend**: Users can be friends, requiring a join table.

## 3. Indexes
- Unique index on the **email** column in the **User** table.
- Unique index on the **set_number** column in the **LegoSet** table.
- Indexes on the **user_id** and **set_id** columns in the **User_Set** table for improved query performance.
- Indexes on the **user_id** and **set_id** columns in the **Reservation** table for improved query performance.

## 4. PostgreSQL Policies (RLS)
- Implement Row-Level Security (RLS) for the **Reservation** and **Friend** tables to control access to data at the row level, ensuring that users can only see their own reservations and friends.

## 5. Additional Notes
- User passwords should be hashed using the bcrypt or Argon2 algorithm.
- The database schema complies with best practices in database design, including normalization to 3NF.
