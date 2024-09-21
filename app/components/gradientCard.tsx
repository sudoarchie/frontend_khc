const GradientCard = ({ children }: { children: any }) => {
  return (
    <div className=" bg-gradient-to-br from-[#00ff75] to-[#3700ff] rounded-[20px] transition-all duration-300 hover:shadow-[0px_0px_30px_1px_rgba(0,255,117,0.30)]">
      <div className=" bg-white rounded-[20px] transition-all duration-200 hover:scale-[0.98] hover:rounded-[20px] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default GradientCard;
