import Button from "../Button/Button"
import "./Main.css"
import { MdAttachMoney } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaShare } from "react-icons/fa6";

const Main = () => {
    return (
        <main>
            <Button icon={<MdAttachMoney />} title="Currency" subtitle="USD" />
            <Button icon={<FaShare />} title="Share" />
            <Button icon={<MdPrivacyTip />} title="Privacy Policy" />
            <Button icon={<IoMdInformationCircle />} title="Terms of Use" />
            <Button icon={<AiFillMessage />} title="Support" />
            <Button icon={<RiDeleteBin5Fill />} title="Delete data" />
        </main>
    )
}

export default Main