import {Button} from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {
    return (
        <div>
            Landing Page (Unprotected)
            <div>
                {/* Button for Login */}
                <Link href="/sign-in">
                    <Button>
                        Login
                    </Button>
                </Link>
                {/* Button for Register */}
                <Link href="/sign-up">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>
        </div>
);
}

export default LandingPage;