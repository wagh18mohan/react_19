

export default function Demo(){

    var StatementComp = addAuthCheckToComp(UpdateStatement);
    var ViewTrans = addAuthCheckToComp(ViewTransactions);
    var UserLogout = addAuthCheckToComp(UserLogoutButton);
    var UserLoin = addLoggingTocomp(UserLoginButton);

    return (

        <>
        <div> high order function.</div>
           <StatementComp></StatementComp>
            <ViewTrans></ViewTrans>
            <UserLogout></UserLogout>
            <UserLoin></UserLoin>
            
        </>
    )
}

function UserLoginButton(){

    return (

        <>
    
        <button>user login</button>
       
        </>
    )
}
function UserLogoutButton(){

    return (

        <>
    
        <button>user logout</button>
       
        </>
    )
}

function UpdateStatement(){

    return (

        <>
        <div>
            <a href="http://UpdateStatement" >
            updata stemernt link
            </a>
        </div>
        </>
    )
}

function ViewTransactions(){

    return (

        <>
       <div>
            <a href="http://UpdateStatement" >
            updata stemernt link
            </a>
        </div>
        </>
    )
}

function addAuthCheckToComp(WrappedComp){

    return function EnhancedComponentwithAuth (){
    var isAuth = false;
    //  var isAuth = true;
        if (isAuth){
             return <WrappedComp></WrappedComp>
        } else {
            return(<><b>u are not authorized for this button</b> <br/></> );
        }
        
    }
}

function addLoggingTocomp(WrappedComp){

    return function AddLoggin(){

        return(

            <>
            <div>Loging Enabled</div>
            <WrappedComp></WrappedComp>
            </>
        )
    }
}